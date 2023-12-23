const slugify = require("slugify");
const postModel = require("../models/post.model");
const PostRepository = require("../models/repositories/post.repo");
const { convertToObjId } = require("../utils");
const { NotFoundError } = require("../core/error.response");

class PostService {
    constructor() {
        this.repository = new PostRepository();
    }

    async createPost({ post_title, post_content, post_author, post_category, post_tags, post_comments = [] }) {
        const post_slug = slugify(post_title, { lower: true });
        const created = await postModel.create({
            post_title,
            post_content,
            post_author: convertToObjId(post_author),
            post_category,
            post_tags,
            post_slug,
            post_comments,
        });

        return created;
    }

    async updatePost(post_id, body) {
        if (body.post_title) {
            body.post_slug = slugify(body.post_title);
        }

        const updated = await postModel.findByIdAndUpdate(post_id, body, { new: true });
        if (!updated) throw new NotFoundError(`Cannot update ${post_id}`);
        return updated;
    }

    async deleteAPost(post_id) {
        const deleted = await postModel.deleteOne({ _id: convertToObjId(post_id) });
        if (!deleted.deletedCount) throw new NotFoundError(`Cannot delete ${post_id}`);
        return true;
    }

    async getSinglePost(post_id) {
        const foundPost = await this.repository.findPostById(post_id);
        if (!foundPost) throw new NotFoundError(`Post not found`);
        return foundPost;
    }

    async getAllPost() {
        const foundPosts = await this.repository.findPostByConditions({});
        return foundPosts;
    }
}

module.exports = PostService;
