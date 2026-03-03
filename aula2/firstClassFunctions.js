function hello(params) {
    console.log("ola");
}
function log(fn) {
    fn();
}
log(hello);

console.log("------3-------");
var myfunction = function() {
    console.log("bomdia");
}

var myfunction2 = function namedFunction() {
    console.log("banoite");
}
myfunction();
myfunction2();

console.log("------4-------");
var greet = function(){
    console.log("bomdia");
}
greet();
log(greet);

console.log("------5-------");
// var http = require('http');
// var server = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');

// });
// server.listen(3000);
