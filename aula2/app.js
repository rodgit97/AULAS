var myLoModule = require("./log");

myLoModule.info("This is an info message");

console.log("------2-------");
var msg = require("./message");
console.log(msg);

console.log("------3-------");
var person = require("./data");
console.log(person.firstname + " " + person.lastname);

console.log("------4-------");
var msg2 = require("./logs");
msg2.logs("This is a log message");

console.log("------5-------");

var msg = require("./log3");
msg("This is a message from log3");

console.log("------6-------");
var person= require("./person");
var p1 = new person("João", "Silva");
console.log(p1.fullname());

