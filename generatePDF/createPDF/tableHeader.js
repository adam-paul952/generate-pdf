/**
 * @file tableHeader.js
 * @description Define columns for table header
 * @module tableHeader
 */

/**
 * @typedef { Object } tableRow
 * @property { string } [text] The text to be displayed in the column
 * @property { string} [alignment] The alignment for text in a column
 * @property { number } [colSpan] The number of columns to span in the table
 * @property { boolean[] } [border] Which borders to include in the column - [Left, Top, Right, Bottom]
 * @property { number[] } [margins] Array containing margins to be placed on the column - [Left, Top, Right, Bottom]
 * @property { string } [image] A string container the relative path to the image URL
 * @property { number } [width] To be used with image to define width
 * @property { number } [height] To be used with image to define height
 * @property { string } [link] Embed a link in the text/image
 */

/**
 * @const topHeader
 * @type tableRow
 * @description Defines the top level header for the document, number of columns defined must match lower level header.
 */

const topHeader = [
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
  { text: "" },
];

/**
 * @const bottomHeader
 * @type tableRow
 * @description Defines the bottom level header for the document, number of columns defined must match upper level header.
 */

const bottomHeader = [
  {
    text: "Status",
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
];

exports.topHeader = topHeader;
exports.bottomHeader = bottomHeader;
