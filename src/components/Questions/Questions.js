import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Question from './Question/Question';
import './questions.css';

const Questions = ({ setCurrentId }) => {
  const questions = useSelector((state) => state.questions);

  //  const handleChange = (event) => {
  //     setQuestions(event.target.value);
  //   };

  return !questions.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={1}>
      {questions.map((question) => (
        <Grid key={question._id} item xs={2} s={1} m={2}>
          <Question className="question" question={question} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Questions;
