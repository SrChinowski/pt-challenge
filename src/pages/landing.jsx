import React from 'react'
import { 
    Button, 
    Grid, 
    Typography, 
    Fade
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import landingImg from "../assets/landing.svg";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: '85vh',
        overflow: "hidde"
    },

    img: {
        width: "40%",
        minWidth: "350px"
    },

    title: {
        textAlign: "center"
    },

    subtitle: {
        color: "gray",
        marginBottom: "1rem"
    }

  }));

const Landing = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
        <Fade in={true} > 
        {/* TODO: improve animation */}
            <Grid 
                container spacing={3} 
                xs={12} sm={12} md={12} lg={12} xl={12}
                justifyContent="center" alignContent="center"
                direction="column"
            >
                <Grid item container
                    justifyContent="center" alignContent="center"
                >
                    <img src={landingImg} alt="Carlos Leon - pt-Challenge" className={classes.img} /> 
                </Grid>

                <Grid 
                    item container 
                    justifyContent="center" alignItems="center" 
                    direction="column"

                >
                    <Typography variant="h4" gutterBottom className={classes.title}> React Engineer Practical Test </Typography>
                    <Typography variant="h5" gutterBottom className={classes.subtitle}> a Challenge for Paga Todo </Typography>

                    <Button variant="contained" color="primary" component={Link} to="/bankList">Bank List</Button>

                </Grid>
            </Grid>

        </Fade>
        </div>
     );
}
 
export default Landing;

