import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchQuestions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createQuestion = (question) => async (dispatch) => {
  try {
    const { data } = await api.createQuestion(question);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateQuestion = (id, question) => async (dispatch) => {
  try {
    const { data } = await api.updateQuestion(id, question);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeQuestion = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeQuestion(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    await await api.deleteQuestion(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
