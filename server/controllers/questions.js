import express from 'express';
import mongoose from 'mongoose';

import PostQuestion from '../models/postQuestion.js';

const router = express.Router();

export const getQuestions = async (req, res) => { 
    try {
        const postQuestions = await PostQuestion.find();
                
        res.status(200).json(postQuestions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuestion = async (req, res) => { 
    const { id } = req.params;

    try {
        const question = await PostQuestion.findById(id);
        
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestion = async (req, res) => {
    const { question, answer, creator, tags, selectedFile } = req.body;

    const newPostQuestion = new PostQuestion({ question, answer, creator, tags, selectedFile })

    try {
        await newPostQuestion.save();

        res.status(201).json(newPostQuestion );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { question, answer, creator, tags, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedQuestion = { question, answer, creator, tags, selectedFile, _id: id };

    await PostQuestion.findByIdAndUpdate(id, updatedQuestion, { new: true });

    res.json(updatedQuestion);
}

export const deleteQuestion = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostQuestion.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likeQuestion = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const question = await PostQuestion.findById(id);

    const updatedQuestion = await PostQuestion.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedQuestion);
}


export default router;