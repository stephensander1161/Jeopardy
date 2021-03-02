import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import Question from './Question/Question';
import useStyles from './styles';

const Questions = ({ setCurrentId }) => {
	const questions = useSelector((state) => state.questions);
	const classes = useStyles();

	//  const handleChange = (event) => {
	//     setQuestions(event.target.value);
	//   };

	return !questions.length ? (
		<CircularProgress />
	) : (
		<Grid container spacing={1}>
			{questions.map((question) => (
				<Grid key={question._id} item xs={2} xs={1} xs={2}>
					<Question question={question} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Questions;
