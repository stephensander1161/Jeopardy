import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createQuestion, updateQuestion } from '../../actions/questions';

const Form = ({ currentId, setCurrentId }) => {
  const [questionData, setQuestionData] = useState({ question: '', answer: '', creator: '', tags: '', selectedFile: '' });
  const question = useSelector((state) => (currentId ? state.questions.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (question) setQuestionData(question);
  }, [question]);

  const clear = () => {
    setCurrentId(0);
    setQuestionData({ question: '', answer: '', creator: '', tags: '', selectedFile: '' });
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
        <Typography variant="h6">{currentId ? `Editing "${question.title}"` : 'Create Jeopardy Question'}</Typography>
        <TextField name="question" variant="outlined" label="Question" fullWidth value={questionData.question} onChange={(e) => setQuestionData({ ...questionData, question: e.target.value })} />
        <TextField name="answer" variant="outlined" label="Answer" fullWidth value={questionData.answer} onChange={(e) => setQuestionData({ ...questionData, answer: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Creator" fullWidth multiline rows={4} value={questionData.creator} onChange={(e) => setQuestionData({ ...questionData, creator: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={questionData.tags} onChange={(e) => setQuestionData({ ...questionData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setQuestionData({ ...questionData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
