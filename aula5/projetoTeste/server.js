const express = require("express");
const app = express();

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Exemplo app listening http://%s:%s", host, port);
});
app.get("/", function (req, res) {
  response.send("boas");
});

app.post("/users", function (req, res) {
  var id = req.body.id;
  response.send("Post user");
});

app.delete("/users/:id", function (req, res) {
  var id = req.params.id;
  response.send("Delete user");
});

// var fs = require("fs");
// var html= fs.readFileSync("./index.html",'utf-8');

//coisa