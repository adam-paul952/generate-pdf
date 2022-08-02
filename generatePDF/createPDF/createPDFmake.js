const fs = require("fs");
const Pdfmake = require("pdfmake");

const { table } = require("./createTable.js");
const { fonts } = require("../constants/fonts.js");
const { columnNames } = require("../constants/columnNames.js");

const { editData } = require("../util/editJSON");

// const ponies = fs.readFileSync("./nps_registered_ponies_edited.json");

// const data = JSON.parse(ponies);

const createPDF = (data) => {
  const editedData = editData(JSON.parse(data));
  // Assign pony data to enter into the table
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
        "NPS#": pony["nps#"],
        SName: pony.sname,
        "SNPS#": pony["snps#"],
        DName: pony.dname,
        "DNPS#": pony["dnps#"],
        Loc: pony.location,
      };
    });

  let pdfmake = new Pdfmake(fonts);

  let listTableDocs = {
    // Function to color all parts of document not covered by Table/Text/CoverImage
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
        image: "./pages/cover-resized-1.png",
        width: 612,
        height: 792,
      },
      {
        columns: [
          {
            // alignment: "justify",
            //       l   T   R  B
            margin: [70, 0, 70, 0],
            background: "#EFDEC7",
            // This page will be removed once PDF is approved
            stack: [
              {
                text: "\n\n\nIntroduction to the Newfoundland Pony Society Annual Herdbook 2021",
                style: "header",
              },
              { text: "[Preliminary]\n\n", style: "header" },
              {
                text: [
                  "This is the first Annual Herdbook of Registered Newfoundland Ponies and is published",
                  " by The Newfoundland Pony Society to be a permanent record of the state of the",
                  " Newfoundland Pony Breed as of the end of a given year and is intended to be published ",
                  "in the first quarter of the following year. We consider the “herd” to include all Registered ",
                  "Ponies, regardless of location.\n\n",
                ],
              },
              {
                text: [
                  "The Herdbook is mandated by the recently established Registrar’s Manual [found on ",
                  "this website] and includes all ponies registered to December 31, 2021 ending with ",
                  "Registration Number 952.\n\n",
                ],
              },
              {
                text: [
                  "It is compiled from the most recent Lineage Report with the addition of information ",
                  "from The Newfoundland Pony Society records. The newest features include the last ",
                  "known location of each pony by Province or State and Country as of December 31, 2021 ",
                  "and virtual access to a photograph of the pony as available in cooperation with the ",
                  "owner or former owner. Ancestry Family Trees accessible directly from the Herdbook by ",
                  "clicking on the pony's name and Descendant tables can be accessed from the Lineage Report ",
                  "on the website.\n\n",
                ],
              },
              {
                text: [
                  "We believe that the Herdbook will become an important tool in pursuit of the Society's ",
                  "mandate to Promote, Preserve, and Protect the Newfoundland Pony. It will provide a ",
                  "point-in-time compendium of information on the state of the breed and aid in research. ",
                  "It will also provide support and information for breeders and individual owners ",
                  "seeking to breed their pony and be of interest to horse and pony lovers everywhere, ",
                  "particularly Newfoundland Pony lovers.\n\n",
                ],
              },
              {
                text: [
                  "We are aware that there are ponies eligible for registration that are not yet registered ",
                  "and encourage owners to recognize the importance to the future of the Newfoundland ",
                  "Pony to have all eligible ponies Registered and included in the Herdbook. This is an ",
                  "important goal of The Newfoundland Pony Society in our efforts to preserve and protect ",
                  "the Newfoundland Pony and provides valuable recognition for each individual animal as ",
                  "a Newfoundland Pony.\n\n",
                ],
              },
              {
                text: [
                  "[IMORTANT NOTE: This Edition of the Herdbook is labelled Preliminary, as we know ",
                  "that our current information on the location of a particular pony may not be accurate, ",
                  "since pony owners may not have notified the Society of a transfer or sale of a Registered Pony. ",
                  "Location listed as UNC means we are uncertain as to the current location of the pony. ",
                  "Similarly with the death or gelding of a Registered Pony. If you have information ",
                  "as to the location or status of a pony as of December 31, 2021, inconsistent with the information here, ",
                  "please notify the Registrar, Kelly-Power Kean at ",
                  { text: "registrar@newfoundlandpony.com", style: "link" },
                  ". After a suitable period to allow for corrections, we will remove the Preliminary designation.]",
                  "\n\n",
                ],
              },
              {
                text: [
                  "Jack Harris, President    Kelly Power-Kean, Registrar\n\n",
                  "The Newfoundland Pony Society 2022",
                ],
                style: "header",
              },
            ],
            pageBreak: "after",
            fontSize: 12,
          },
        ],
      },
      {
        text: "Abbreviations used in the Herdbook entries:\n\n\n\n",
        margin: [70, 792 / 3.5, 70, 0],
        fontSize: 12,
      },
      {
        margin: [70, 0, 70, 0],
        fontSize: 12,
        columns: [
          { text: "Status:", width: "20%" },
          { text: "L = Live, D = Deceased, UNK = Unknown" },
        ],
      },
      { text: "\n" },
      {
        margin: [70, 0, 70, 0],
        fontSize: 12,
        columns: [
          { text: "NPS#:", width: "20%" },
          {
            text: "PQ2, PQ3, etc. = Unregistered Pony whose parentage qualifies them for registration but are unregistered as of the date of publication",
          },
        ],
      },
      { text: "\n" },
      {
        margin: [70, 0, 70, 0],
        fontSize: 12,
        columns: [
          { text: "Sex:", width: "20%" },
          {
            text: "S = Stallion, C = Colt (ungelded male pony under 4 years), Gelding = gelded male pony, M = Mare, F = Filly (female pony under 4 years)",
          },
        ],
      },
      { text: "\n" },
      {
        margin: [70, 0, 70, 0],
        fontSize: 12,
        columns: [
          { text: "Location:", width: "20%" },
          {
            text: "NL, ME, etc. = Two-Letter Abbreviation for Province or State, UNC = Uncertain",
          },
        ],
        pageBreak: "after",
      },
      table(sortedData, columnNames),
    ],
    pageSize: "letter",
    defaultStyle: {
      fontSize: 10,
      fillColor: "#EFDEC7",
      backgroundColor: "#EFDEC7",
    },
    styles: {
      header: {
        bold: true,
        alignment: "center",
        background: "#EFDEC7",
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
  pdfDoc.pipe(fs.createWriteStream("pdfs/nps_herdbook_revised_08_02_22.pdf"));
  pdfDoc.end();

  const current_datetime = new Date();
  console.log(`----------`);
  console.log(`PDF has been created! :)`);
  console.log(
    current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds()
  );
};

exports.createPDF = createPDF;
