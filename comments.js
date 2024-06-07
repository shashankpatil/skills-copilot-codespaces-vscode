// Create a Web Server
// Create a Web Server that listens on port 3000
// The server should respond to a request to /comments in the following way:
// The server should respond with a status code of 200
// The server should respond with a JSON object that represents an array of comments. Each comment should have an id, a username, and a comment property.
// The server should respond with the following JSON object:
// [
//   {
//     "id": 1,
//     "username": "alice",
//     "comment": "I love your blog!"
//   },
//   {
//     "id": 2,
//     "username": "bob",
//     "comment": "Good post."
//   }
// ]
// The server should respond with the appropriate content type.

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'application/json');
  // Set a status code of 200
  res.statusCode = 200;
  // Create an array of comments
  const comments = [
    {
      id: 1,
      username: 'alice',
      comment: 'I love your blog!',
    },
    {
      id: 2,
      username: 'bob',
      comment: 'Good post.',
    },
  ];
  // Convert the array to JSON
  const commentsJSON = JSON.stringify(comments);
  // Send the JSON response
  res.end(commentsJSON);
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server.js file in the terminal
// node server.js
// Open a web browser and go to http://localhost:3000/comments to see the JSON response.