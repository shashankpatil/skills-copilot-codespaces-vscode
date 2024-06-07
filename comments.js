// Create a Web Server
// Create a web server that's going to send a response of "Hello World" for every request it receives.
// The server should listen on port 3000.
// Use the createServer method from the http module.
// This method receives a requestListener callback function that takes a request and a response object.
// The requestListener callback function should send the response with the HTTP status 200 and the Content-Type header set to text/plain.
// The response should be the string "Hello World".

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(3000);