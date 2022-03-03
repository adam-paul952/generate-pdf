// requires
const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const ponies = fs.readFileSync("./nps_registered_ponies.json");

// create document
let doc = new PDFDocument({ margin: 10, size: "A4" });
// file name
doc.pipe(fs.createWriteStream("document.pdf"));

// table

const data = JSON.parse(ponies);

let sortedData = data.sort((a, b) => {
  return a.id_number - b.id_number;
});

const checkPonyStatus = (status) => {
  if (status === "Live") {
    return "L";
  } else {
    return "D";
  }
};

const table = {
  title: "",
  //   columnSpacing: 0,
  headers: [
    {
      label: "id",
      property: "id",
      width: 25,
      align: "center",
    },
    { label: "status", property: "status", width: 25, align: "center" },
    {
      label: "nps_id_#",
      property: "nps_id_#",
      width: 50,
      align: "center",
    },
    // {
    //   label: "registrar_name",
    //   property: "registrar_name",
    //   width: 20,
    //   align: "center",
    // },
    { label: "name", property: "name", width: 95, align: "center" },
    { label: "sex", property: "sex", width: 50, align: "center" },
    {
      label: "DOB",
      property: "DOB",
      width: 50,
      align: "center",
    },
    { label: "sire_name", property: "sire_name", width: 90, align: "center" },
    {
      label: "sire_reg_#",
      property: "sire_reg_#",
      width: 50,
      align: "center",
    },
    // {
    //   label: "sire_registrar_name",
    //   property: "sire_registrar_name",
    //   width: 10,
    //   align: "center",
    // },
    { label: "dam_name", property: "dam_name", width: 90, align: "center" },
    {
      label: "dam_reg_#",
      property: "dam_reg_#",
      width: 50,
      align: "center",
    },
  ],
  datas:
    /* complex data */
    sortedData.map((pony) => {
      return {
        options: { fontSize: 15, separation: true },
        id: pony.id_number,
        status: checkPonyStatus(pony.pony_status),
        "nps_id_#": pony.pony_nps_id_number,
        registrar_name: pony.pony_registrar_name,
        name: pony.pony_name,
        sex: pony.pony_sex,
        DOB: pony.pony_date_of_birth,
        sire_name: pony.sire_name,
        "sire_reg_#": pony.sire_nps_reg_number,
        sire_registrar_name: pony.sire_registrar_name,
        dam_name: pony.dam_name,
        "dam_reg_#": pony.dam_nps_reg_number,
      };
    }),
  rows: [
    /* or simple data */
  ],
};
// the magic
doc.table(
  table,
  {
    /* options */
    options: {
      width: 500,
      padding: 10,
    },
  },
  () => {
    /* callback */
  }
);
// doc.table() is a Promise to async/await function

// if your run express.js server
// to show PDF on navigator
// doc.pipe(res);

// done!
doc.end();
