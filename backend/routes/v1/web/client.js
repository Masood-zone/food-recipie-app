const { Router } = require("express");
const router = Router();

const client = require("../../../controllers/client");
const validationError = require("../../../utils/validationError");
const validationScheme = require("../../../validator/validationSchema");
const isValid = [validationScheme.clientValidationRules, validationError.validateRequestSchema];
const availability = require("../../../validator/middleware/clientCheck");

router.post("/signUp", isValid, availability.client, client.addClient);
router.post("/login", client.login);
router.get("/list", client.getClients);
router.get("/:id", client.getClientById);
router.patch("/:id", client.editClient);
router.delete("/:id", client.removeClient);

module.exports = router;
