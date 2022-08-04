/**
 * @file createTable.js
 * @description Defines the layout for the table to be created
 * @module table
 */

const { columnWidths } = require("../constants/columns.js");
const { buildTableBody } = require("./buildTableBody.js");

/**
 *
 * @param { PonyList[] } data
 * @param { string[] } columns
 * @returns The created table for the PDF document
 * @returns Layout - assigns colors for the borders of the columns
 */

const table = (data, columns) => {
  return {
    table: {
      headerRows: 2,
      widths: columnWidths,
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
};

exports.table = table;
