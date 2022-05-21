const debug = require("debug")("kinds:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDataBase = (connectionMongoUrl) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionMongoUrl, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.bold.bgMagenta.greenBright(`Database connected`));
      resolve();
    });
  });
module.exports = connectDataBase;
