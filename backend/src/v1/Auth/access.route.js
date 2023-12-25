const express = require("express");
const asyncHandler = require("../helpers/async.handler");
const accessController = require("./access.controller");
const { authenticate } = require("./auth.utils");
const router = express.Router();

// sign up
router.post("/signup", asyncHandler(accessController.signUp));
router.post("/login", asyncHandler(accessController.login));

// authentication middleware //
router.use(authenticate);
// ========================

router.post("/logout", asyncHandler(accessController.logout));
router.post("/handle-refresh-token", asyncHandler(accessController.handleRefreshToken));

module.exports = router;
