const {Router} = require('express');

const mainRouter = Router();
const indexRoute = require("../routes/v1/index");

mainRouter.use('/v1', indexRoute);




module.exports = mainRouter;