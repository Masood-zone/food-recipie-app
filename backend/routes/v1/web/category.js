const { Router } = require("express");
const router = Router();
const cartegory = require("../../../controllers/cartegory");
const upload = require("../../../utils/multerUtil");

router.post("/add", upload.single("image"), cartegory.register_cartegory);
router.get("/list", cartegory.getAllCartegories);
router.get("/:id", cartegory.getSingleCartegory);
router.patch("/:id", cartegory.editCartegory);
router.delete("/:id", cartegory.removeCartegory);

module.exports = router;
