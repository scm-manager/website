const createLogger = require('pino');
const { logging } = require('./config');
const { name } = require("../package");

module.exports = createLogger({
  name,
  ...logging
});
