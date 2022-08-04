const Pony = require("./readDb.model");
const { createPDF } = require("../createPDF/createPDFmake");

/**
 * @file readDB.controller.js
 * @description Methods to handle request to and response from Pony model
 * @module findAll
 */

/**
 *
 * @param {*} res Response object containing data from Pony.get all method. Sets status code based on response object
 * @description req param omitted - not used
 */

exports.findAll = (_, res) => {
  Pony.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all ponies.",
      });
    } else {
      const ponies = JSON.stringify(data);
      createPDF(ponies);
      res.status(200).send({ message: `Successfully retrieved all ponies.` });
    }
  });
};
