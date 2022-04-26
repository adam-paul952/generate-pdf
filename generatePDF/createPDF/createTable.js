const { buildTableBody } = require("./createPDF/buildTableBody.js");

const table = (data, columns) => {
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
};

module.exports = { table };
