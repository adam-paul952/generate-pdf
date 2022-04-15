const fs = require("fs");
const Pdfmake = require("pdfmake");

const ponies = fs.readFileSync("./nps_registered_ponies_edited.json");

const data = JSON.parse(ponies);

let arrangedData = data.sort((a, b) => {
  return b["nps#"] - a["nps#"];
});

const checkPhotoStatus = (string) => {
  if (string === "") {
    return string;
  } else {
    string = "./assets/camera.png";
  }
  return string;
};

const sortedData = arrangedData.map((pony) => {
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
    Location: pony.location,
  };
});

const fonts = {
  Roboto: {
    normal: "fonts/roboto/Roboto-Regular.ttf",
    bold: "fonts/roboto/Roboto-Medium.ttf",
    italics: "fonts/roboto/Roboto-Italic.ttf",
    bolditalics: "fonts/roboto/Roboto-MediumItalic.ttf",
  },
};

function buildTableBody(data, columns) {
  const body = [
    [
      {
        text: "Registered Newfoundland Pony",
        alignment: "center",
        colSpan: 6,
        border: [false, false, true, true],
      },
      {},
      {},
      {},
      {},
      {},
      {
        text: "Sire",
        alignment: "center",
        colSpan: 2,
        border: [false, false, true, true],
      },
      {},
      {
        text: "Dam",
        alignment: "center",
        colSpan: 2,
        border: [true, false, true, true],
      },
      {},
      {
        text: "Location",
        rowSpan: 2,
        margin: [0, 8, 0, 0],
        border: [true, false, true, true],
        alignment: "center",
      },
    ],
    [
      {
        text: "Status",
        // margin: [0, 8, 0, 0],
        //        L   ,   T   ,  R   ,  B
        border: [false, false, false, true],
        alignment: "center",
      },
      { text: "NPS#", border: [true, true, true, true], alignment: "center" },
      {
        text: "Name",
        border: [true, true, true, true],
        alignment: "center",
      },
      {
        text: "Img",
        border: [true, true, true, true],
        alignment: "center",
      },
      { text: "DOB", border: [true, true, true, true], alignment: "center" },
      {
        text: "Sex",
        // margin: [0, 8, 0, 0],
        border: [true, false, true, true],
        alignment: "center",
      },
      { text: "Name", border: [true, true, true, true], alignment: "center" },
      { text: "NPS#", border: [true, true, true, true], alignment: "center" },
      { text: "Name", border: [true, true, true, true], alignment: "center" },
      { text: "NPS#", border: [true, true, true, true], alignment: "center" },
      {},
    ],
  ];

  data.forEach((row) => {
    let dataRow = [];

    columns.forEach((col) => {
      if (col === "Img") {
        const string = checkPhotoStatus(row[col]);
        if (string === "") {
          dataRow.push({ text: row[col] });
        } else {
          dataRow.push({
            image: string,
            width: 20,
            height: 20,
            alignment: "center",
            link: row[col],
          });
        }
      } else {
        dataRow.push({ text: row[col], alignment: "center" });
      }
    });
    body.push(dataRow);
  });
  return body;
}

function table(data, columns) {
  return {
    table: {
      headerRows: 2,
      body: buildTableBody(data, columns),
      dontBreakRows: true,
    },
    layout: {
      hLineColor: function (i, node) {
        return i === 0 || i === node.table.body.length
          ? "lightgrey"
          : "lightgrey";
      },
      vLineColor: function (i, node) {
        return i === 0 || i === node.table.widths.length
          ? "lightgrey"
          : "lightgrey";
      },
      margin: [0, 0, 0, 0],
      alignment: "center",
    },
  };
}

const columnNames = [
  "Status",
  "NPS#",
  "Name",
  "Img",
  "DOB",
  "Sex",
  "SName",
  "SNPS#",
  "DName",
  "DNPS#",
  "Location",
];

let pdfmake = new Pdfmake(fonts);

let listTableDocs = {
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
                "Registration Number 952. It is compiled from the most recent Lineage Report with the ",
                "addition of information from The Newfoundland Pony Society records. The newest ",
                "features include the last known location of each pony by Province or State and Country ",
                "and virtual access to a photograph of the pony as available in cooperation with the ",
                "owner or former owner. Ancestry and Descendant tables are also accessible from the ",
                "Herdbook.\n\n",
              ],
            },
            {
              text: [
                "We believe that the Herdbook will become an important tool in pursuit of the Society's ",
                "mandate to Promote, Preserve, and Protect the Newfoundland Pony. It will provide a ",
                "point-in-time compendium of information on the state of the breed and aid in research; ",
                "provide support and information for breeders, and to individual owners seeking to breed ",
                "their pony; and, be of interest to horse and pony lovers everywhere, particularly ",
                "Newfoundland Pony lovers.\n\n",
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
                "since pony owners may not have notified the Society of a transfer or sale of a ",
                "Registered Pony. Similarly with the death of a Registered Pony. If you have information ",
                "as to the location or status of a pony inconsistent with the information here, ",
                "please notify the Registrar, Kelly-Power Kean at ",
                { text: "registrar@newfoundlandpony.com", style: "link" },
                ". After a suitable period to allow for corrections, we will remove the Preliminary designation.]",
                "\n\n",
              ],
            },
            {
              text: [
                "Jack Harris, President    Kelly Power-Kean, Registrar\n\n",
                "The Newfoundland Pony Society March 2022",
              ],
              style: "header",
            },
          ],
          pageBreak: "after",
          fontSize: 12,
        },
      ],
    },
    table(sortedData, columnNames),
  ],
  // defaultStyle: {},
  pageSize: "letter",
  defaultStyle: {
    fontSize: 10,
    fillColor: "#EFDEC7",
    backgroundColor: "#EFDEC7",
    // alignment: "center",
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
pdfDoc.pipe(fs.createWriteStream("pdfs/nps_herdbook_redo.pdf"));
pdfDoc.end();
