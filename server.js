const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  fs.readFile('./users.json', (error, data) => {
    error ? console.log(error) : null;
    res.write(data);
    res.end();
  });
});

server.listen(PORT, 'localhost', (error) => {
  error
    ? console.log(error)
    : console.log(`Host started >>> http://localhost:${PORT}`);
});
