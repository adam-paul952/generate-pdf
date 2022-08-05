/**
 * @file createPDFmake.js
 * @description Sorts and build the entire PDF document
 * @module createPDF
 */

const fs = require("fs");
const Pdfmake = require("pdfmake");

const { fonts } = require("../constants/fonts.js");
const { columnNames } = require("../constants/columns.js");
const { table } = require("./createTable.js");
const { introductionPage } = require("../pages/introduction.js");
const { abbreviationPage } = require("../pages/abbreviations.js");

const { formatNPSNumber } = require("../util/helpers");
const { formatPonyData } = require("../util/formatPonyData");

const {
  currentDate,
  currentTime,
  documentSavePath,
} = require("../constants/documentName");

/**
 * Creates the PDF document and saves it into ./pdfs with the current date appending the document title
 * @param { PonyList } data
 * @param { string[] } availablePhotos
 * @returns { void } void
 */

const createPDF = (data, availablePhotos) => {
  const editedData = formatPonyData(JSON.parse(data), availablePhotos);
  const sortedData = editedData
    .sort((a, b) => {
      return b["nps#"] - a["nps#"];
    })
    .map((pony) => {
      return {
        Status: pony.status,
        Img: pony.image,
        Sex: pony.sex,
        DOB: pony.dob,
        Name: {
          text: pony.name,
          link: `https://www.newfoundlandpony.com/lineage/pony_family_tree_v2.php?pony_nps_id_number=${pony["nps#"]}`,
          style: "link",
        },
        "NPS#": formatNPSNumber(pony["nps#"]),
        SName: pony.sname,
        "SNPS#": pony["snps#"],
        DName: pony.dname,
        "DNPS#": pony["dnps#"],
        Loc: pony.location,
      };
    });

  let pdfmake = new Pdfmake(fonts);

  let listTableDocs = {
    // Function to apply color to all pages
    background: () => {
      return {
        canvas: [
          {
            type: "rect",
            x: 0,
            y: 0,
            w: 612,
            h: 792,
            color: "#EFDEC7",
          },
        ],
      };
    },
    pageMargins: { top: 0, bottom: 0, left: 0, right: 0 },
    content: [
      {
        image: "./pages/coverPage.png",
        width: 612,
        height: 792,
      },
      introductionPage,
      abbreviationPage,
      table(sortedData, columnNames),
    ],
    pageSize: "letter",
    defaultStyle: {
      fontSize: 10,
    },
    styles: {
      header: {
        bold: true,
        alignment: "center",
      },
      leftAlign: {
        alignment: "left",
      },
      link: {
        decoration: "underline",
        color: "#0074c1",
      },
    },
  };

  pdfDoc = pdfmake.createPdfKitDocument(listTableDocs, {});
  pdfDoc.pipe(fs.createWriteStream(documentSavePath));
  pdfDoc.end();

  console.log(`----------`);
  console.log(`PDF has been created! :)`);
  console.log(`${currentDate} - ${currentTime}`);
};

exports.createPDF = createPDF;
