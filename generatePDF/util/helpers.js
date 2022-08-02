const { availablePhotos } = require("./constants");

// Shorten pony status to fit in column
const checkPonyStatus = (status) => {
  if (status === "Live") {
    return "L"; // Live
  } else {
    return "D"; // Deceased
  }
};

// Shorten Sex of pony to fit into column
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

// If pony has photo associated from DB assign camera image in IMG column
const checkPhotoStatus = (string) => {
  if (string === "") {
    return string;
  } else {
    string = "./assets/camera.png";
  }
  return string;
};

// Format NPS number if duplicate numbers added
const formatNPSNumber = (string) => {
  if (string.length < 2) return string;
  return string.substr(0, 3);
};

// Assign Pony photo URL to pony IMG column
const assignPhotoURL = (number) => {
  let url = ``;
  availablePhotos.forEach((photo) => {
    if (photo === number) {
      // console.log(`Does exist!!!`, number);
      url = `https://newfoundlandpony.com/lineage/pictures/${number}.jpg`;
    }
  });
  return url;
};

const formatLocationString = (string) => {
  if (string === "") return "";
  return string.substr(0, 2);
};

module.exports = {
  checkPonyStatus,
  assignPonySex,
  checkPhotoStatus,
  formatNPSNumber,
  assignPhotoURL,
  formatLocationString,
};
