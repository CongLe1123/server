import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    title: String,
    translator: String,
    tags: [String],
    images: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;