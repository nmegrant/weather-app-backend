const { Router } = require("express");
const Searches = require("../models").searchResults;

const router = new Router();

router.post("/searches", async (request, response, next) => {
  let { location } = request.body;
  location = location.toLowerCase();
  if (!location) {
    return response.status(400).send("No location to add");
  }
  try {
    await Searches.findOrCreate({
      where: { location: location },
      defaults: { location: location, numSearches: 0 },
    });
    await Searches.increment({ numSearches: 1 }, { where: { location } });
  } catch (error) {
    console.log(`Error adding to search history: ${error}`);
  }
});

router.get("/searches", async (request, response, next) => {
  try {
    const searches = await Searches.findAll();
    return response.status(200).send(searches);
  } catch (error) {
    console.log(`Error getting search history: ${error}`);
  }
});

module.exports = router;
