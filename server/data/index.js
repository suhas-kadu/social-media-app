import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

export const users = [
    {
        _id: userIds[0],
        firstName: "test",
        lastName: "me",
        email: "aaaaaaa@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        imageUrl: "p11.jpeg",
        friends: [],
        location: "San Fran, CA",
        occupation: "Software Engineer",
        viewedProfile: 14561,
        impressions: 888822,
        createdAt: 1115211422,
        updatedAt: 1115211422,
        __v: 0,
    },
    {
        _id: userIds[1],
        firstName: "Steve",
        lastName: "Ralph",
        email: "thataaa@gmail.com",
        password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        imageUrl: "p3.jpeg",
        friends: [],
        location: "New York, CA",
        occupation: "Degenerate",
        viewedProfile: 12351,
        impressions: 55555,
        createdAt: 1595589072,
        updatedAt: 1595589072,
        __v: 0,
    },
    {
        _id: userIds[2],
        firstName: "Some",
        lastName: "Guy",
        email: "someguy@gmail.com",
        password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
        imageUrl: "p4.jpeg",
        friends: [],
        location: "Canada, CA",
        occupation: "Data Scientist Hacker",
        viewedProfile: 45468,
        impressions: 19986,
        createdAt: 1288090662,
        updatedAt: 1288090662,
        __v: 0,
    },
    {
        _id: userIds[3],
        firstName: "Whatcha",
        lastName: "Doing",
        email: "whatchadoing@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        imageUrl: "p6.jpeg",
        friends: [],
        location: "Korea, CA",
        occupation: "Educator",
        viewedProfile: 41024,
        impressions: 55316,
        createdAt: 1219214568,
        updatedAt: 1219214568,
        __v: 0,
    },
    {
        _id: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        imageUrl: "p5.jpeg",
        friends: [],
        location: "Utah, CA",
        occupation: "Hacker",
        viewedProfile: 40212,
        impressions: 7758,
        createdAt: 1493463661,
        updatedAt: 1493463661,
        __v: 0,
    },
    {
        _id: userIds[5],
        firstName: "Harvey",
        lastName: "Dunn",
        email: "harveydunn@gmail.com",
        password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
        imageUrl: "p7.jpeg",
        friends: [],
        location: "Los Angeles, CA",
        occupation: "Journalist",
        viewedProfile: 976,
        impressions: 4658,
        createdAt: 1381326073,
        updatedAt: 1381326073,
        __v: 0,
    },

];

export const comments = [
    {
        commentId: uuidv4(),
        userId: userIds[0],
        postId: userIds[0],
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        profileImageUrl: "p8.jpeg",
        description: "Can I now?",
        commentLikes: [userIds[0], userIds[1]],
    },



]

export const posts = [

    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[3],
        firstName: "Whatcha",
        lastName: "Doing",
        location: "Korea, CA",
        description:
            "Another really long random description. This one is longer than the previous one.",
        imageUrl: "post2.jpeg",
        profileImageUrl: "p6.jpeg",
        likes: [

            userIds[1],
            userIds[2],
        ],
        comments: comments[0]
    },
    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[4],
        firstName: "Jane",
        lastName: "Doe",
        location: "Utah, CA",
        description:
            "This is the last really long random description. This one is longer than the previous one.",
        imageUrl: "post3.jpeg",
        profileImageUrl: "p5.jpeg",
        likes: ["tg", "hyhy"],
        comments: comments[0]
    },


    {
        _id: new mongoose.Types.ObjectId(),
        userId: userIds[7],
        firstName: "Jessica",
        lastName: "Dunn",
        location: "Washington, DC",
        description:
            "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
        imageUrl: "post6.jpeg",
        profileImageUrl: "p9.jpeg",
        likes: ["tg", "hyhy"],

        comments: comments[0]
    },
];

