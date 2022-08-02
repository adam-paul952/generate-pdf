const fs = require("fs");
// const ponies = fs.readFileSync("./nps_registered_ponies.json");
const {
  checkPonyStatus,
  assignPonySex,
  formatNPSNumber,
  assignPhotoURL,
  formatLocationString,
} = require("./helpers");

// const data = JSON.parse(ponies);

// Test if pony has photo by pinging the server
// const urlExists = (number) => {
//   let url = `https://newfoundlandpony.com/lineage/pictures/`;
//   let http = new XMLHttpRequest();
//   http.open("HEAD", `${url}${number}.jpg`, false);
//   http.send();
//   if (http.status !== 404) {
//     console.log(`Does Exist!!!!`, number);
//     return `${url}${number}.jpg`;
//   } else {
//     console.log(`Does not exist...`, number);
//     return null;
//   }
// };

// Edit the data that comes from the API
// Probably end up using this when the call from the DB is made
const editData = (data) =>
  data.map((pony) => {
    return {
      id: pony.id_number,
      image: assignPhotoURL(pony.pony_nps_id_number),
      status: checkPonyStatus(pony.pony_status),
      "nps#": formatNPSNumber(pony.pony_nps_id_number),
      name: pony.pony_name, // ../`${"NPS#"}.jpg`
      dob: pony.pony_date_of_birth,
      sex: assignPonySex(pony.pony_sex),
      sname: pony.sire_name,
      "snps#": pony.sire_nps_reg_number,
      dname: pony.dam_name,
      "dnps#": pony.dam_nps_reg_number,
      location: formatLocationString(pony.Location),
    };
  });

// // Write edited data to JSON file
// const writeNewFile = () => {
//   let newList = JSON.stringify(editData);
//   fs.writeFileSync("nps_registered_ponies_edited.json", newList, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("The file was saved!");
//     }
//   });
// };

// writeNewFile();

exports.editData = editData;
