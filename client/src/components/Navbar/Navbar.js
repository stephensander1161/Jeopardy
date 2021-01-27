import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import useStyles from './styles';
import jeologo from '../../images/jeologo.jpg';




const Navbar = () => {
      const classes = useStyles();



    return (

          <AppBar className={classes.appBar} position="static" color="inherit">
        <img  src={jeologo} height="320" alt="icon" />
      </AppBar>


    );


   
};

export default Navbar;

    



