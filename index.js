// const cluster = require("cluster");

// if (cluster.isPrimary) {
//   cluster.fork();
//   cluster.fork();
// } else {
const express = require("express");
const crypto = require("crypto");
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  //doWork(5000);
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    //console.log("1: ", Date.now() - start);
    res.send("Hello");
  });
});

app.get("/fast", (req, res) => {
  res.send("THis is fast!!");
});

app.listen(3000);
//}
