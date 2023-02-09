import Post from "../models/Post";
import User from "../models/User";
import { v4 as uuidv4 } from "uuid";

// Create
export const addComment = async (req, res) => {
    try {

        const { userId, description, postId } = req.body;

        const user = await User.findById(userId);

        const post = await Post.findById(userId);

        const newComment = new Comment(
            {
                commentId: uuidv4(),
                userId,
                postId,
                firstName: user.firstName,
                lastName: user.lastName,
                profileImageUrl: user.profileImageUrl,
                description: description,
                commentLikes: []
            }
        );

        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { comments: [...post.comments, newComment] },
        );

        res.status(201).json(updatedPost);
        console.log(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

// Update
export const likeComment = async (req, res) => {
    try {

        const { commentId, userId, postId } = req.body;
        // const comment = Comment.findById(commentId);
        const post = Post.findById(postId);
        let likes = post.comments.commentLikes;

        if (likes.includes(userId)) {
            likes = likes.filter(id => id === userId);
        } else {
            likes.push(userId);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
                comments: {
                    commentLikes: [...likes]
                }
            }
        );

        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(404).json({ message: err.message });
    }
}


