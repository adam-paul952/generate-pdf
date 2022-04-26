module.exports = (app) => {
  const ponies = require("./readDB.controller");
  app.get("/api/ponies", ponies.findAll);
};
