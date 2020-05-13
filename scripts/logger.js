const bunyan = require('bunyan');
const { logging } = require('./config');
const { name } = require("../package");

module.exports = bunyan.createLogger({
  name,
  ...logging
});
