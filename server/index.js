const express = require("express");
const path = require("path");

const app = express();

const clientFolder = "client/css-assignment-2";

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/../", clientFolder)));

// An api endpoint that returns a short list of items
// Don't need here, just for test purpose
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../" + clientFolder + "/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log("App is listening on port " + port);
