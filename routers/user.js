const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).send("Please supply email and password");
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return response
        .status(400)
        .send("No user with the email/password is incorrect");
    }
    delete user.dataValues["password"];
    return response.status(200).send(user);
  } catch (error) {
    console.log(`The login error is: ${error}`);
  }
});

module.exports = router;
