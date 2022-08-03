const { checkPhotoStatus } = require("../util/helpers");

const buildTableBody = (data, columns) => {
  const body = [
    // First Array is for Top-Level headers
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
        border: [true, false, false, false],
      },
      {},
      {
        text: "",
        // margin: [0, 16, 0, 0],
        // border: [true, true, true, true],
        // alignment: "center",
      },
    ],
    // Second array is for lower-level headers
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
      {
        text: "Loc",
        border: [true, true, true, true],
        alignment: "center",
      },
    ],
  ];

  data.forEach((row) => {
    let dataRow = [];

    columns.forEach((col) => {
      // If column is === "Img", and the pony has a photo listed
      // we assign the camera image with the link for the URL
      // else we just push an empty string into column
      if (col === "Img") {
        const string = checkPhotoStatus(row[col]);
        if (string === "") {
          dataRow.push({ text: row[col] });
        } else {
          dataRow.push({
            image: string,
            width: 15,
            height: 15,
            alignment: "center",
            link: row[col],
          });
        }
      } else if (
        col === "Status" ||
        col === "NPS#" ||
        col === "Sex" ||
        col === "SNPS#" ||
        col === "DNPS#"
      ) {
        // If column !== "Img", we push the data for that column
        dataRow.push({ text: row[col], alignment: "center" });
      } else {
        dataRow.push({ text: row[col], alignment: "left" });
      }
    });
    body.push(dataRow);
  });
  return body;
};

module.exports = { buildTableBody };
