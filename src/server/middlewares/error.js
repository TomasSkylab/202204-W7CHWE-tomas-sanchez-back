const chalk = require("chalk");
const debug = require("debug")("redsocial:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ message: "Endpoint was not found" });
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(`Error: ${error.message}`));
  const errorCode = error.code ?? 500;
  const errorMessage = error.code ? error.message : "General error";
  res.status(errorCode).json({ message: errorMessage });
};

module.exports = {
  notFoundError,
  generalError,
};
