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

module.exports = { checkPonyStatus, assignPonySex, checkPhotoStatus };
