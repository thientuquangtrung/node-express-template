const postModel = require("../post.model");

class PostRepository {
    async insertPost({}) {
        return "inserted post to db";
    }

    async findPostById(post_id) {
        return await postModel.findById(post_id);
    }

    async findPostByConditions({ skip = 0, limit = 10 }) {
        return await postModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    }
}

module.exports = PostRepository;
