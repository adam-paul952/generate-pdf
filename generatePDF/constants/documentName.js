const moment = require("moment");

/**
 * @file documentName.js
 * @description Constants for current date, time and document save path
 * @module documentName.js
 */

/**
 * @const currentDate
 * @type string
 * @description Date formatted as DD-MM-YY
 */

const currentDate = moment().format("DD-MM-YY");

/**
 * @const currentTime
 * @type string
 * @description Time formatted as hh:mm A (00:00 [A|P]M)
 */

const currentTime = moment().format("hh:mm A");

/**
 * @const documentSavePath
 * @type string
 * @description Saves the PDF in the pdf directory appended with the current date
 */

const documentSavePath = `pdfs/nps_herdbook_revised_${currentDate}.pdf`;

exports.currentDate = currentDate;
exports.currentTime = currentTime;
exports.documentSavePath = documentSavePath;
