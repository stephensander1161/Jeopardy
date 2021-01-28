import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';



const Category = ({ question, setCurrentId }) => {
      const classes = useStyles();
        const questions  = useSelector((state) => state.questions);



    return (

    
   <select>
        {questions.map((question) => <option key={question.category} value={question.category}>{question.category}</option>)}
      </select>


    )



}


export default Category