const express = require("express");
const router = express.Router();

const controller = require("../controllers/movementController");

router.get("/", controller.getMovements);
router.post("/", controller.createMovement);
router.put("/:id", controller.updateMovement);
router.delete("/:id", controller.deleteMovement);

module.exports = router;