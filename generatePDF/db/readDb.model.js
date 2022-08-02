const sql = require("./db");

const Pony = function (pony) {
  this.id_number = pony.id_number;
  this.pony_status = pony.pony_status;
  this.pony_nps_id_number = pony.pony_nps_id_number;
  this.pony_name = pony.pony_name;
  this.pony_registrar_name = pony.pony_registrar_name;
  this.pony_sex = pony.pony_sex;
  this.pony_date_of_birth = pony.pony_date_of_birth;
  this.sire_name = pony.sire_name;
  this.sire_nps_reg_number = pony.sire_nps_reg_number;
  this.sire_registrar_name = pony.sire_registrar_name;
  this.dam_name = pony.dam_name;
  this.dam_nps_reg_number = pony.dam_nps_reg_number;
  this.location = pony.Location;
};

Pony.getAll = (result) => {
  sql.query(`SELECT * from family_tree`, (err, res) => {
    if (err) {
      console.log(`Error: `, err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Pony;
