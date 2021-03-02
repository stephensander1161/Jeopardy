import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Navbar from '../src/components/Navbar/Navbar';

import Questions from './components/Questions/Questions';
import Form from './components/Form/Form';
import { getQuestions } from './actions/questions';
import useStyles from './styles';

const App = () => {
	const [ currentId, setCurrentId ] = useState(0);
	const [ showForm, setShowForm ] = React.useState(false);

	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(
		() => {
			dispatch(getQuestions());
		},
		[ currentId, dispatch ]
	);

	const formClicked = () => {
		setShowForm(true);
	};
	const hideClicked = () => {
		setShowForm(false);
	};

	return (
		<Container>
			<Navbar />
			<Button className={classes.addQuestionFont} onClick={formClicked}>
				Add a Question
			</Button>
			{showForm ? (
				<div>
					<Button onClick={hideClicked}>Hide</Button>{' '}
					<Form currentId={currentId} setCurrentId={setCurrentId} />
				</div>
			) : null}

			<Questions setCurrentId={setCurrentId} />
		</Container>
	);
};

export default App;
