const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        post_title: {
            type: "String",
            required: true,
            trim: true,
        },
        post_content: {
            type: "String",
            required: true,
            trim: true,
        },
        post_author: {
            type: "ObjectId",
            required: true,
            ref: "User",
        },
        post_category: {
            type: "String",
        },
        post_tags: {
            type: ["String"],
        },
        post_slug: {
            type: "String",
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        post_comments: [
            {
                type: "ObjectId",
                ref: "Comment",
            },
        ],
    },
    {
        timestamps: true,
        collection: "Posts"
    },
);

module.exports = mongoose.model("Post", PostSchema);
