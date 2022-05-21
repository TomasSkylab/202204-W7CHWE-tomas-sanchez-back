require("dotenv").config();
const express = require("express");
const { userLogin, registrerUser } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.post("/registrer", registrerUser);

module.exports = userRouter;
