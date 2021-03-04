import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createQuestion, updateQuestion } from '../../actions/questions';

const Form = ({ currentId, setCurrentId }) => {
  const [questionData, setQuestionData] = useState({
    category: '',
    air_date: '',
    question: '',
    value: '',
    answer: '',
    round: '',
    show_number: '',
  });
  const question = useSelector(
    (state) => (currentId ? state.questions.find((message) => message._id === currentId) : null),
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(
    () => {
      if (question) setQuestionData(question);
    },
    [question],
  );

  const clear = () => {
    setCurrentId(0);
    setQuestionData({
      category: '',
      air_date: '',
      question: '',
      value: '',
      answer: '',
      round: '',
      show_number: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createQuestion(questionData));
      clear();
    } else {
      dispatch(updateQuestion(currentId, questionData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Create Jeopardy Question'}</Typography>
        <TextField
          name="category"
          variant="outlined"
          label="Category"
          fullWidth
          value={questionData.category}
          onChange={(e) => setQuestionData({ ...questionData, category: e.target.value })}
        />
        <TextField
          name="question"
          variant="outlined"
          label="Question"
          fullWidth
          multiline
          rows={4}
          value={questionData.question}
          onChange={(e) => setQuestionData({ ...questionData, question: e.target.value })}
        />
        <TextField
          name="answer"
          variant="outlined"
          label="Answer"
          fullWidth
          value={questionData.answer}
          onChange={(e) => setQuestionData({ ...questionData, answer: e.target.value })}
        />
        <TextField
          name="round"
          variant="outlined"
          label="Round"
          fullWidth
          value={questionData.round}
          onChange={(e) => setQuestionData({ ...questionData, round: e.target.value })}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
