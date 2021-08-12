import React from 'react'

import { 
    AppBar, 
    Toolbar,
    Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '1.5rem',
        maxHeight: '15vh'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white",
        textDecoration: "none"
    }
  }));



const Navbar = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography 
                        variant="h6" className={classes.title}
                        component={Link} to="/"
                    >
                        Carlos Leon
                    </Typography>

                </Toolbar>

            </AppBar>
        </div>
     );
}
 
export default Navbar;