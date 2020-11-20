const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let btnes = "btn-es";

document.getElementById("btn-es").onclick = function () {
  alert("Test Seccefull");
};

// document.getElementById("es").onclick = function () {
//   alert("hello!");
// };

// app.get("/", function (req, res) {
//   res.send("Hello! This is a test");
// });

// app.listen(3030, function () {
//   console.log("Server started at port 3000");
// });
