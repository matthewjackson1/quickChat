const express = require("express");
const router = express.Router();

const chatController = require("../controllers/chatController");

router.get("/chats", chatController.index);

module.exports = router;