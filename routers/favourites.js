const Router = require("express");
const { toJWT, toData } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Favourites = require("../models").favourite;

const router = new Router();

router.get("/favourites", authMiddleware, async (request, response) => {
  try {
    const favs = await Favourites.findAll({
      where: { userId: request.user.id },
    });
    if (!favs) {
      return response.status(404).send("No favourites found");
    }
    return response.status(200).send([...favs]);
  } catch (error) {
    console.log(`Getter user favourites: ${error}`);
  }
});

router.post("/favourites", authMiddleware, async (request, response) => {
  const { location } = request.body;
  if (!location) {
    return response.status(400).send("No location specified");
  }
  try {
    const newFavouriteList = await Favourites.create({
      userId: request.user.id,
      location: location,
    });
    return response.status(201).send(newFavouriteList);
  } catch (error) {
    console.log(`Error adding a new favourite: ${error}`);
  }
});

module.exports = router;
