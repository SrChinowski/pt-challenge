import React from 'react'

import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import PropTypes  from 'prop-types';

const useStyles = makeStyles((theme) => ({
    subtitle: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "1rem"
    },
    icon: {
        fontSize: '5rem'
    }
}));

const BankItem = ({bank}) => {

    const classes = useStyles();

    return ( 
        <Grid item  xs={12} sm={12} md={6} lg={6} xl={6}>
            <Paper className={classes.card}>

                <Grid 
                    container spacing={3}
                    justifyContent="center" alignContent="center"
                >

                    <Grid item container justifyContent="center" alignContent="center" xs={4} sm={4} md={4} lg={4} xl={4}>
                        <AccountBalanceIcon className={classes.icon}/>
                    </Grid>

                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>

                        <Typography variant="h6" color="primary" >
                            <a href={bank.url} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>
                                {bank.bankName}
                            </a>
                        </Typography>

                        <Typography className={classes.subtitle}>{bank.description}</Typography>
                        <Typography className={classes.subtitle}>{bank.age} años</Typography>
                        {/* <Typography className={classes.subtitle}>{bank.url}</Typography> */}

                    </Grid>

                </Grid>
            </Paper>
        </Grid>
        
    );
}

BankItem.propTypes = {
    bank: PropTypes.object.isRequired
}
 
export default BankItem;