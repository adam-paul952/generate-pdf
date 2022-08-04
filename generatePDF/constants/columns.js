/**
 * @file columns.js
 * @description Column Names Displaying in the PDF document
 * @module columnNames
 * @module columnWidths
 */

/**
 * @const columnNames
 * @type string[]
 * @description Array containing names of PDF columns
 */

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
  "Loc",
];

/**
 * @const columnWidths
 * @type { (string | number) [] }
 * @description Array containing values of the widths of all columns within the table
 */

const columnWidths = [
  "auto",
  "auto",
  "auto",
  "auto",
  54,
  "auto",
  "auto",
  "auto",
  "auto",
  "auto",
  23,
];

exports.columnNames = columnNames;
exports.columnWidths = columnWidths;
