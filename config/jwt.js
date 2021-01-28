const expressJwt = require("express-jwt");
require("dotenv").config();

const jwt = () => {
  return expressJwt({ secret: process.env.SECRET, algorithms: ["HS256"] }).unless({
    path: [
      // public routes that don't require authentication
      "/users/authenticate",
    ],
  });
};

module.exports = jwt;
