const express = require("express");
const run = require("../controller/equation.controller");
const equation_route = express.Router();

equation_route.post('/',run)

module.exports = equation_route;
