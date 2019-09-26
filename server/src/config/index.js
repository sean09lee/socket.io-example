/* eslint-disable import/no-dynamic-require */
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const config = require('./config.' + environment);

module.exports = config;
