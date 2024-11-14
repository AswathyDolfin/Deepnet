const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController"); 

router.post("/addItems", itemController.addItems);
router.get("/getItems", itemController.getItems);

module.exports = router;
