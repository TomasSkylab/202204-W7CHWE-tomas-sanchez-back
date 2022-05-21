require("dotenv").config();
const express = require("express");
const { userLogin, registrerUser } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/registrer", registrerUser);
userRouter.post("/login", userLogin);

module.exports = userRouter;
