const { Router } = require("express");
const router = Router();
const order = require("../../../controllers/order");

router.post("/create", order.createOrder);
router.get("/list", order.getAllOrders);
router.get("/:id", order.getSingleOrder);
router.patch("/:id", order.patchOrder);
router.patch("/status/bulk", order.patchOrderStatus);
router.delete("/:id", order.deleteOrder);

module.exports = router;
