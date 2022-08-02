// const createPDF = require("./createPDF");
// const createPDFTable = require("./createPDFTable");
const fs = require("fs");
const Pony = require("./readDb.model");
const { createPDF } = require("../createPDF/createPDFmake");

exports.findAll = (req, res) => {
  Pony.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all ponies.",
      });
    } else {
      const ponies = JSON.stringify(data);
      // fs.writeFileSync("nps_registered_ponies.json", ponies, (err) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log("The file was saved!");
      //   }
      // });
      createPDF(ponies);
      // createPDFTable(data);
      res.status(200).send({ message: `Successfully retrieved all ponies.` });
    }
  });
};
