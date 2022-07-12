const { buildTableBody } = require("./buildTableBody.js");

const table = (data, columns) => {
  return {
    table: {
      headerRows: 2,
      widths: [
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
        "auto",
      ],
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
