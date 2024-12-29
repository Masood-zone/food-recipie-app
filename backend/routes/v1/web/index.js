const { Router } = require("express");
const route = Router();
const client = require("./client");
const category = require("./category");
const recipe = require("./recipe");
const delivery = require("./delivery");
const order = require("./order");

route.use("/client", client);
route.use("/category", category);
route.use("/recipe", recipe);
route.use("/delivery", delivery);
route.use("/order", order);

module.exports = route;
