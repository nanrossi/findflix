const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3333;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(cors());

server.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});

module.exports = server;