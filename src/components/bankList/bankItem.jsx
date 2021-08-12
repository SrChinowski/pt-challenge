import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        
    },
    img: {
        maxWidth: '100%'
    }
}));

const BankItem = () => {

    const classes = useStyles();

    return ( 
        <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper className={classes.card}>

            <Grid container spacing={3}>

                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <img src='https://www.qbrobotics.com/wp-content/uploads/2018/03/sample-logo.png' 
                    alt="Carlos Leon - pt-Challenge" className={classes.img} />
                </Grid>

                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Typography>Nombre</Typography>
                    <Typography>Desc</Typography>
                    <Typography>Antiguedad: 10</Typography>
                </Grid>

            </Grid>
        </Paper>
        </Grid>
        
     );
}
 
export default BankItem;