import React, {useState} from 'react';
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
    const [showResults, setShowResults] = React.useState(false)
        const [showQuestion, setShowQuestion] = React.useState(false)



  const dispatch = useDispatch();
  const classes = useStyles();

    const answerClicked = () => {
      setShowResults(true); 
    }

      const hideClicked = () => {
      setShowResults(false); 
            setShowQuestion(false); 

    }
    const questionClicked = () => {
      setShowQuestion(true); 
    }


  return (

    <React.Fragment>
    <Card  >
      {/* <CardMedia className={classes.media} image={question.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={question.question} /> */}
        <Typography className={classes.qtitle} variant="h6">{question.category} </Typography>
                <Typography className={classes.qtitle} variant="h6"> {question.value}</Typography>
                <Button  value="Search" onClick={questionClicked}> See Question</Button>        



       { showQuestion ?  <div><Typography  variant="h5">{question.question}</Typography>

      <div className={classes.overlay2}>
        <Button style={{ color: 'black' }} size="small" onClick={() => setCurrentId(question._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
<Button value="Search" onClick={answerClicked}> Check Answer</Button>        
            { showResults ? <div><Typography className={classes.qtitle} variant="h5">{question.answer}</Typography>  
            
            <CardContent className="grid-container ">
         
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="" color="primary" onClick={() => dispatch(deleteQuestion(question._id))}> Delete</Button>
                      <Button size="small" color="primary" onClick={() => setCurrentId(question._id)}> Edit</Button>

              

      </CardActions> 
                    <Button size="small" color="primary" onClick={hideClicked}><MoreHorizIcon fontSize="default" /> Hide</Button>

      </div> : null } </div> : null }

       
        
        
     
    </Card>

    </React.Fragment>
  );
};

export default Question;
