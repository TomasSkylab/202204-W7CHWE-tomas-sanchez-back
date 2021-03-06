require("dotenv").config();
const debug = require("debug")("redsocial:server");
const chalk = require("chalk");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/error");
const userRouter = require("./routers/userRouters");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/users", userRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = { startServer, app };
