import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        commentId: {
            type: String,
        },
        userId: {
            type: String,
        },
        postId: {
            type: String,
        },
        firstName: {
            type: String,
            required: true,

        },
        lastName: {
            type: String,
            required: true,

        },

        profileImageUrl: {
            type: String,

        },
        description: {
            type: String,
            required: true,
        },
        commentLikes: {
            type: Array,
            default: []
        }

    }
);

const Comment = mongoose.model("Comment", commentSchema);