import React from 'react';
import { AppBar, Typography} from '@material-ui/core';
import useStyles from './styles';
import jeologo from '../../images/jeologo.jpg';
import Category from '../Category/Category'




const Navbar = () => {
      const classes = useStyles();



    return (
      <>
<Category />
          <AppBar className={classes.appBar} position="static" color="inherit">
        <img  src={jeologo} height="320" alt="icon" />
      </AppBar>
        

      </>


    );


   
};

export default Navbar;

    



