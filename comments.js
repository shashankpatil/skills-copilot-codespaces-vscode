// Create a Web Server
// 1. Create a new web server
// 2. Create a route for GET /comments
// 3. Return a list of comments
// 4. Listen on port 3000

const express = require('express');

const app = express();

app.get('/comments', (req, res) => {
  res.json([{ id: 1, author: 'John', body: 'Hello' }]);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
