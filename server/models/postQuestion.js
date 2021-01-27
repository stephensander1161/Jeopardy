import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    question: String,
    answer: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostQuestion = mongoose.model('PostQuestion', postSchema);

export default PostQuestion;