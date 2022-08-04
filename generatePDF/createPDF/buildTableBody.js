/**
 * @file buildTableBody.js
 * @description Builds the content for the PDF tables containing all Pony data
 * @module buildTableBody
 */

const { checkPhotoStatus } = require("../util/helpers");
const { topHeader, bottomHeader } = require("./tableHeader");

/**
 * Used to build the PDF table body with columns and Registered Pony Information
 * @param { !PonyList } ponyList List of pony data from the DB
 * @param { !string [] } columnNames String [] of column names
 * @returns { string[] } Array of string [] to populate each row with pony information
 * @returns ||
 * @returns {import("./tableHeader").tableRow} tableRow[]
 */

const buildTableBody = (ponyList, columnNames) => {
  const body = [topHeader, bottomHeader];

  ponyList.forEach((row) => {
    /**
     * @const tableRow
     * @type {import('./tableHeader').tableRow}
     * @description Using table row is fine using only a string as a column value
     * @examples ["Name", "Age", ...]
     * @examples OR
     * @examples [{ text: "Name", alignment: "center" }, ...]
     */

    const tableRow = [];

    columnNames.forEach((col) => {
      // If column is === "Img", and the pony has a photo listed
      // we assign the camera image with the link for the URL
      // else we just push an empty string into column
      if (col === "Img") {
        const string = checkPhotoStatus(row[col]);
        if (string === "") {
          tableRow.push({ text: row[col] });
        } else {
          tableRow.push({
            image: string,
            width: 15,
            height: 15,
            alignment: "center",
            link: row[col],
          });
        }
        // If column !== "Img", we push the data for that column
        // Client wanted these columns centered
      } else if (
        col === "Status" ||
        col === "NPS#" ||
        col === "Sex" ||
        col === "SNPS#" ||
        col === "DNPS#"
      ) {
        tableRow.push({ text: row[col], alignment: "center" });
        // Remainder of columns are left aligned
      } else {
        tableRow.push({ text: row[col], alignment: "left" });
      }
    });

    body.push(tableRow);
  });

  return body;
};

exports.buildTableBody = buildTableBody;
