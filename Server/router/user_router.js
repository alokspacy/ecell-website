const express = require("express");
const router = express.Router();
const { updateProfile } = require("../controllers/user_controller.js");
const authMiddleware = require("../middlewares/auth_middleware.js");

router.route("/update").patch(authMiddleware, updateProfile);

module.exports = router;