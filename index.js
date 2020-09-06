const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const user = require("./routers/user");
const favourites = require("./routers/favourites");
const searches = require("./routers/searches");

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

const corsMiddleWare = require("cors");
app.use(corsMiddleWare());

app.use(user);
app.use(favourites);
app.use(searches);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
