var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*'
    });
    response.end('Hello World\n');
}).listen(process.env.PORT || 80);


console.log("servidor de pé naporta..: " + (process.env.PORT || 80) );
// process.env.PORT || 3000, process.env.IP || "0.0.0.0"
