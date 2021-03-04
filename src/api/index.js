import axios from 'axios';

const url = 'https://jeopardy-backend-heroku.herokuapp.com/questions';

export const fetchQuestions = () => axios.get(url);
export const createQuestion = (newQuestion) => axios.post(url, newQuestion);
export const likeQuestion = (id) => axios.patch(`${url}/${id}/likeQuestion`);
export const updateQuestion = (id, updatedQuestion) => axios.patch(`${url}/${id}`, updatedQuestion);
export const deleteQuestion = (id) => axios.delete(`${url}/${id}`);
