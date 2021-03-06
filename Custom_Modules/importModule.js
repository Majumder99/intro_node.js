// let http = require("http");
// let dt = require("./myModule");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html", body: "Sourav" });
//     res.write("Today's date is " + dt.myDate());
//     res.end();
//   })
//   .listen(5000, () => console.log("...server is running"));

// var http = require("http");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(5000);

var url = require("url");
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
console.log(q.hostname);
var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
