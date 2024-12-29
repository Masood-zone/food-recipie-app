const { Router } = require("express");
const router = Router();
const recipe = require("../../../controllers/recipe");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/add", upload.single("image"), recipe.saveRecipe);
router.get("/list", recipe.getRecipes);
router.get("/:id", recipe.getSingleRecipie);
router.patch("/:id", recipe.editRecipe);
router.delete("/:id", recipe.deleteRecipe);

module.exports = router;
