const { Router } = require("express");
const mainRouter = Router();
const indexRoute = require("../v1/web/index");
mainRouter.use("/web", indexRoute);



module.exports = mainRouter;