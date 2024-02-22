const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        licenseCategory: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
        },
        registration: {
            type: String,
        },
        aircraftType: {
            type: String,
        },
        ataChapter: {
            type: Int,
        },
        taskType: {
            type: String,
        },
        taskDuration: {
            type: Int,
        },
        workorder: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
