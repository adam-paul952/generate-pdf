/**
 * @file helpers.js
 * @exports Helper functions to format Pony data
 */

/**
 * Shortens a pony status to fit better in column
 * @param { string } status Status of the pony
 * @returns  { string } Letter stating status of pony
 */

const checkPonyStatus = (status) => {
  if (status === "Live") {
    return "L"; // Live
  } else {
    return "D"; // Deceased
  }
};

/**
 * Shortens a pony sex to fit into the column
 * @param { string } sex Sex of the pony
 * @returns { string } First letter of pony sex
 */

const assignPonySex = (sex) => {
  switch (sex) {
    case "Mare":
      return "M";
    case "Filly":
      return "F";
    case "Stallion":
      return "S";
    case "Gelding":
      return "G";
    case "Colt":
      return "C";
    default:
      return sex.charAt(0).toUpperCase();
  }
};

/**
 * Assign Pony photo URL to pony IMG column, if the pony has an image available
 * @param { string } npsNumber NPS Number of the Pony
 * @param { string[] } availablePhotos Array of string values from scraper.js to assign image url to ponies
 * @returns { string } URL hosting the Newfoundland Pony image
 */

const assignPhotoURL = (npsNumber, availablePhotos) => {
  let url = ``;
  availablePhotos.forEach((photo) => {
    if (photo === npsNumber) {
      url = `https://newfoundlandpony.com/lineage/pictures/${npsNumber}.jpg`;
    }
  });
  return url;
};

/**
 * If pony has a photo URL assigned
 * When building the table body if Pony has assigned URL then camera icon is assigned
 * @param { string } url URL of Pony image || ""
 * @returns  { string } if string is empty - empty string
 * @returns else a string for the camera icon location
 */

const checkPhotoStatus = (url) => {
  if (url === "") {
    return url;
  } else {
    url = "./assets/camera.png";
  }
  return url;
};

/**
 * Format NPS number if duplicate numbers added
 * ex. For pony 504/443 - 443/504 returns first 3 digits
 * @param { string } npsNumber NPS Number of Pony
 * @returns { string } NPS number to 3 or less digits
 */

const formatNPSNumber = (npsNumber) => {
  if (npsNumber.length < 2) return npsNumber;
  return npsNumber.slice(0, 3);
};

/**
 * Formats the location string from the DB
 * @param { string } location Location of Pony
 * @returns { string }empty string if empty string is provided
 * @returns UNC if string is UNC
 * @returns location string to 2 characters
 */

const formatLocationString = (location) => {
  if (location === "") return "";
  if (location === "UNC") return "UNC";
  return location.slice(0, 2);
};

module.exports = {
  checkPonyStatus,
  assignPonySex,
  checkPhotoStatus,
  formatNPSNumber,
  assignPhotoURL,
  formatLocationString,
};
