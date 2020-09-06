const { Router } = require("express");
const Searches = require("../models").searchResults;

const router = new Router();

router.post("/searches", async (request, response, next) => {
  const { location } = request.body;
  if (!location) {
    return response.status(400).send("No location to add");
  }
  try {
    const searchHistory = await Searches.findOrCreate({
      where: { location: location },
      defaults: { location: location, numSearches: 0 },
    });
  } catch (error) {
    console.log(`Error adding to search history: ${error}`);
  }
});

module.exports = router;
