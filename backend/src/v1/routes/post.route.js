const postController = require("../controllers/post.controller");
const asyncHandler = require("../helpers/async.handler");

const router = require("express").Router();

router.get("/:id", asyncHandler(postController.getASinglePost));
router.get("", asyncHandler(postController.getAllPost));
router.post("", asyncHandler(postController.createNewPost));
router.patch("/:id", asyncHandler(postController.updateExistingPost));
router.delete("/:id", asyncHandler(postController.deleteAPost));

module.exports = router;
