const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

//Use Helmet to secure express server
server.use(helmet());

//To support JSON and URL encoded bodies
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

//Enable all CORS requests
server.use(cors());

//Create home page
server.use('/home', express.static(path.join(__dirname, 'public')));

module.exports = server;