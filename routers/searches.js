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

function sort_searches(a, b) {
  return b.numSearches - a.numSearches;
}

router.get("/searches", async (request, response, next) => {
  try {
    const searches = await Searches.findAll();
    sorted_searches = [...searches].sort(sort_searches).slice(0, 10);
    final_searches = [...searches].filter((search) =>
      sorted_searches.includes(search)
    );
    return response.status(200).send(final_searches);
  } catch (error) {
    console.log(`Error getting search history: ${error}`);
  }
});

module.exports = router;
