const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

router.get("/chats", chatController.index);
router.post("/chats/create", chatController.create);

module.exports = router;