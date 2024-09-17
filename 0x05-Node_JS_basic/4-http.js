const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const myApp = http.createServer();

myApp.on('request', (_, res) => {
  const responseTxt = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseTxt.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseTxt));
});

myApp.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = myApp;
