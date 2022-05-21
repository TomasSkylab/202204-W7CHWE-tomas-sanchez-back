const chalk = require("chalk");
const debug = require("debug")("redsocial:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ message: "Endpoint was not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (err, req, res, next) => {
  debug(chalk.red(`Error: ${err.message}`));
  const errorCode = err.code ?? 500;
  const errorMessage = err.code ? err.message : "General error";
  res.status(errorCode).json({ error: true, message: errorMessage });
};

module.exports = {
  notFoundError,
  generalError,
};
