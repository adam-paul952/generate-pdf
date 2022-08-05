/**
 * @file formatPonyData.js
 * @exports formatPonyData
 */

/**
 * @typedef {Object} PonyList
 * @property {string} id DB ID of pony - not used in formatting data
 * @property {string} status Status of the Pony - Deceased || Live
 * @property {string} nps# NPS Number of Registered Pony
 * @property {string} name Name of Registered Pony
 * @property {string} dob Date of Birth of Registered Pony
 * @property {string} sex Sex of Registered Pony
 * @property {string} image Image url of Registered Pony if provided
 * @property {string} sname Sire Name of Registered Pony
 * @property {string} snps# Sire NPS Number
 * @property {string} dname Dam Name of Registered Pony
 * @property {string} dnps# Dam NPS Number
 * @property {string} location Location of Registered Pony
 */

const {
  checkPonyStatus,
  assignPonySex,
  assignPhotoURL,
  formatLocationString,
} = require("./helpers");

/**
 * Formats the pony data that's provided
 * @param { PonyList } ponyList
 * @param { string[] } availablePhotos
 * @returns { PonyList[] } formatted data for Ponies
 */

const formatPonyData = (ponyList, availablePhotos) =>
  ponyList.map((pony) => {
    return {
      id: pony.id_number,
      image: assignPhotoURL(pony.pony_nps_id_number, availablePhotos),
      status: checkPonyStatus(pony.pony_status),
      "nps#": pony.pony_nps_id_number,
      name: pony.pony_name,
      dob: pony.pony_date_of_birth,
      sex: assignPonySex(pony.pony_sex),
      sname: pony.sire_name,
      "snps#": pony.sire_nps_reg_number,
      dname: pony.dam_name,
      "dnps#": pony.dam_nps_reg_number,
      location: formatLocationString(pony.Location),
    };
  });

exports.formatPonyData = formatPonyData;
