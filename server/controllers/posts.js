import Post from "../models/Post.js";
import User from "../models/User.js";

// Create
export const createPost = async (req, res) => {
    try {

        const { userId, description, imageUrl } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            profileImageUrl: user.imageUrl,
            imageUrl,
            likes: [],
            comments: []
        });

        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

// Read
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

export const getUserPosts = async (req, res) => {
    try {

        const { id } = req.params;
        const { userId } = res.body;
        const post = await Post.findById(id);

        res.status(200).json(post);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

// Update
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        let likes = post.likes;

        if (likes.includes(userId)) {
            likes = likes.filter(id => id === userId)
        } else {
            likes.push(userId);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: [...likes] },

        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};