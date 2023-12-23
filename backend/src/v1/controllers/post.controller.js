const { CREATED, OK } = require("../core/success.response");
const PostService = require("../services/post.service");

module.exports = new (class PostController {
    constructor() {
        this.service = new PostService();
    }

    createNewPost = async (req, res, next) => {
        new CREATED({
            message: "New post has been created",
            metadata: await this.service.createPost(req.body),
        }).send(res);
    };

    updateExistingPost = async (req, res, next) => {
        new OK({
            message: "Updated post successfully",
            metadata: await this.service.updatePost(req.params.id, req.body),
        }).send(res);
    };

    deleteAPost = async (req, res, next) => {
        new OK({
            message: "Delete post successfully",
            metadata: await this.service.deleteAPost(req.params.id),
        }).send(res);
    };

    getASinglePost = async (req, res, next) => {
        new OK({
            message: "Get single post successfully",
            metadata: await this.service.getSinglePost(req.params.id),
        }).send(res);
    };

    getAllPost = async (req, res, next) => {
        new OK({
            message: "Get list posts successfully",
            metadata: await this.service.getAllPost(),
        }).send(res);
    };
})();
