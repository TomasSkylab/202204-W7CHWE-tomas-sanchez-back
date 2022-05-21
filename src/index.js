require("dotenv").config();
const debug = require("debug")("redsocial:root");
const chalk = require("chalk");
const connectDataBase = require("./database");
const startServer = require("./server");

const port = process.env.SERVER_PORT || 4000;
const mongoConnection = process.env.MONGODB_STRING;

(async () => {
  try {
    await connectDataBase(mongoConnection);
    await startServer(port);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
