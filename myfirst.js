var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><h1>The date and time are currently ' + dt.myDateTime() + '</h1></html>');
    res.end();
}).listen(8080);
