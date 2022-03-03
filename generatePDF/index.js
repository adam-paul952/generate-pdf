const express = require("express");

require("dotenv").config();

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: `Success connection` });
});

require("./readDB.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
