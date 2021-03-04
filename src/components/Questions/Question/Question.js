import React from 'react';
import { Card, CardContent, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './question.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import useStyles from './styles';

const Question = ({ question }) => {
  const [showResults, setShowResults] = React.useState(false);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const answerClicked = () => {
    setShowResults(true);
  };

  const hideClicked = () => {
    setOpen(false);
    setShowResults(false);
  };

  return (
    <>
      <Card className={classes.qbackground} onClick={handleClickOpen}>
        {/* <CardMedia className={classes.media} image={question.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={question.question} /> */}
        <CardContent>
          <Typography className={classes.qtitle} variant="h6">
            {question.category}{' '}
          </Typography>
          <Typography className={classes.qtitle} variant="h6">
            {' '}
            {question.value}
          </Typography>
        </CardContent>

      </Card>
      <Button className={classes.seeq} variant="outlined" color="primary" onClick={handleClickOpen}>
        SEE QUESTION
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.seeqbackground}>Question</DialogTitle>
        <DialogContent className={classes.seeqbackground}>
          <DialogContentText className={classes.seeq}>
            {question.question}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.seeqbackground}>
          <Button className={classes.seeq} onClick={answerClicked} color="primary">
            ANSWER
          </Button>
        </DialogActions>
        <DialogContent className={classes.seeqbackground}>

          {showResults ? (
            <div>
              <Typography className={classes.qtitle} variant="h5">
                {question.answer}
              </Typography>

              <CardContent className="grid-container " />

              <DialogActions>
                <Button className={classes.seeq} size="small" color="primary" onClick={hideClicked}>
                  <MoreHorizIcon fontSize="default" /> Hide
                </Button>

              </DialogActions>

            </div>
          ) : null}{' '}
        </DialogContent>

      </Dialog>
    </>
  );
};

export default Question;

/* <CardActions className={classes.cardActions}>
                <Button
                  className={classes.seeq}
                  size=""
                  color="primary"
                  onClick={() => dispatch(deleteQuestion(question._id))}
                >
                  {' '}
                  Delete
                </Button>
                <Button
                  className={classes.seeq}
                  size="small"
                  color="primary"
                  onClick={() => setCurrentId(question._id)}
                >
                  {' '}
                  Edit
                </Button>
              </CardActions>
              */
