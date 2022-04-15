const fs = require("fs");
const ponies = fs.readFileSync("./nps_registered_ponies.json");
const { checkPonyStatus, assignPonySex } = require("./helpers");

const data = JSON.parse(ponies);

const urlExists = (number) => {
  let url = `https://newfoundlandpony.com/lineage/pictures/`;
  let http = new XMLHttpRequest();
  http.open("HEAD", `${url}${number}.jpg`, false);
  http.send();
  if (http.status !== 404) {
    console.log(`Does Exist!!!!`, number);
    return `${url}${number}.jpg`;
  } else {
    console.log(`Does not exist...`, number);
    return null;
  }
};

const availablePhotos = [
  "871",
  "870",
  "863",
  "846",
  "833",
  "828",
  "818",
  "801",
  "794",
  "769",
  "768",
  "729",
  "728",
  "724",
  "720",
  "718",
  "708",
  "694",
  "676",
  "667",
  "655",
  "651",
  "650",
  "537",
  "533",
  "423",
];

const assignPhotoURL = (number) => {
  let url = ``;
  availablePhotos.forEach((photo) => {
    if (photo === number) {
      console.log(`Does exist!!!`, number);
      url = `https://newfoundlandpony.com/lineage/pictures/${number}.jpg`;
    }
  });
  return url;
};

const editData = data.map((pony) => {
  return {
    id: pony.id_number,
    image: assignPhotoURL(pony.pony_nps_id_number),
    status: checkPonyStatus(pony.pony_status),
    "nps#": pony.pony_nps_id_number,
    name: pony.pony_name, // ../`${"NPS#"}.jpg`
    dob: pony.pony_date_of_birth,
    sex: assignPonySex(pony.pony_sex),
    sname: pony.sire_name,
    "snps#": pony.sire_nps_reg_number,
    dname: pony.dam_name,
    "dnps#": pony.dam_nps_reg_number,
    location: pony.Location,
  };
});

const writeNewFile = () => {
  let newList = JSON.stringify(editData);
  fs.writeFileSync("nps_registered_ponies_edited.json", newList, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
  });
};

writeNewFile();
