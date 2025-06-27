const express = require("express");
const { conn, initializeDb } = require("./misc/database.js");
const newAdeaRoute = require("./routes/newIdea.js");
const app = express();
const port = 3131;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "working" });
});

app.use(newAdeaRoute);

initializeDb().then(() => {
  app.listen(port, () => {
    console.log(`listening @ http://localhost:${port}`);
  });
});
