const express = require("express");
const bookRoutes = require("./BookRoute");
const authorRoutes = require("./AuthorRoute");

const Routes = (dependencies) => {
  const router = express.Router();
  router.use("/book", bookRoutes(dependencies));
  router.use("/author", authorRoutes(dependencies));
  
  return router;
};

module.exports = Routes;
