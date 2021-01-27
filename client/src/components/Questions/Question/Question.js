import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './question.css';

import { likeQuestion, deleteQuestion } from '../../../actions/questions';
import useStyles from './styles';

const Question = ({ question, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card  className={classes.card}>
      {/* <CardMedia className={classes.media} image={question.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={question.question} /> */}
        <Typography className={classes.qtitle} variant="h10">Question:</Typography>
        <Typography className={classes.qtitle} variant="h5">{question.question}</Typography>

      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(question._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
        <Typography className={classes.qtitle} variant="h10">Answer:</Typography>
        <Typography className={classes.qtitle} variant="h5">{question.answer}</Typography>
      <CardContent className="grid-container ">
          <div className="item1">
          <Typography variant="h10"  color="textSecondary" component="h15">Created by: </Typography>
        <Typography variant="h10" color="textSecondary" component="h15">{question.creator}</Typography>
        </div>
        <div className="item2">
        <Typography variant="h10" color="textSecondary" className={classes.qtitle} component="h15">Tags:</Typography>
        <Typography variant="h10" color="textSecondary" component="h15">{question.tags.map((tag) => `${tag}, `)}</Typography>
      </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(deleteQuestion(question._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Question;
