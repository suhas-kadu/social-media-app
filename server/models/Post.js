import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },

        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        location: String,
        description: String,
        imageUrl: String,
        profileImageUrl: String,
        likes: {
            type: Array,
            default: []
        },
        comments: {
            type: Array,
            default: []
        }

    },

    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;