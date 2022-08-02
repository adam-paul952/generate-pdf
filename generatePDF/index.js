const express = require("express");

require("dotenv").config();

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: `Successful connection` });
});

require("./db/readDB.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
