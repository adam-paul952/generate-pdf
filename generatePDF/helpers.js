const checkPonyStatus = (status) => {
  if (status === "Live") {
    return "L"; // Live
  } else {
    return "D"; // Deceased
  }
};

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

module.exports = { checkPonyStatus, assignPonySex };
