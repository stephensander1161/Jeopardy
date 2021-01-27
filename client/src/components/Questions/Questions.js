import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Question from './Question/Question';
import useStyles from './styles';

const Questions = ({ setCurrentId }) => {
  const questions = useSelector((state) => state.questions);
  const classes = useStyles();

  return (
    !questions.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {questions.map((question) => (
          <Grid key={question._id} item xs={12} sm={6} md={6}>
            <Question question={question} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Questions;
