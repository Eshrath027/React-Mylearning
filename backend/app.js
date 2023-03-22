const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("abcd");
  
});
app.get("/home", function (req, res) {
    res.send("Eshrath");
    
  });

app.listen(5000, () => console.log("Running on port 5000"));