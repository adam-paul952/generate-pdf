/**
 * @file readDB.routes.js
 * @description Holds routes for API endpoints
 * @module app
 */

/**
 * Creates API route endpoints
 */

module.exports = (app) => {
  const ponies = require("./readDB.controller");
  const findAllEndpoint = "/api/ponies";
  app.get(findAllEndpoint, ponies.findAll);
};
