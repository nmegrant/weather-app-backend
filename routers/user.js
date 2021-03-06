const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).send("Please supply email and password");
    }
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response
        .status(400)
        .send("No user with the email/password is incorrect");
    }
    delete user.dataValues["password"];
    const token = toJWT({ userId: user.id });
    return response.status(200).send({ ...user.dataValues, token });
  } catch (error) {
    console.log(`The login error is: ${error}`);
  }
});

router.post("/signup", async (request, response, next) => {
  const { name, location, email, password } = request.body;
  if (!email || !name || !location || !password) {
    return response.status(400).send("Missing information to complete sign up");
  }
  const user = await User.findOne({ where: { email } });
  if (user) {
    return response
      .status(400)
      .send("An account with that email already exists");
  }
  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
      location,
    });
    delete newUser.dataValues["password"];
    const token = toJWT({ userId: newUser.id });
    response.status(201).send({ ...newUser.dataValues, token });
  } catch (error) {
    console.log(`Sign up error: ${error}`);
  }
});

router.get("/user", authMiddleware, async (request, response) => {
  delete request.user.dataValues["password"];
  try {
    const user = await User.findOne({
      where: { id: request.user.id },
    });
    if (!user) {
      return response.status(404).send("User not found");
    }
    response
      .status(200)
      .send({ ...user.dataValues, ...request.user.dataValues });
  } catch (error) {
    console.log(`Fetching user info: ${error}`);
  }
});

module.exports = router;
