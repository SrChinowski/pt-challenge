import React, {useEffect} from 'react'

import { 
    Grid, 
    Typography,
    Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BankItem from '../components/bankList/bankItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '30px'
    },
  }));

const BankList = () => {

    const classes = useStyles();

    return ( 
    <div className={classes.root}>

        <Grid
            container spacing={6}
            xs={12} sm={12} md={12} lg={12} xl={12}
        >
            {/* Header */}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <br></br>

                <Typography variant="h5" color="primary">
                    Bank List
                </Typography>

                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    Here you can view a list of banks
                </Typography>

                <Divider style={{ width: "100%" }}></Divider>   
            </Grid>


            {/* Content */}
            <BankItem></BankItem>
            <BankItem></BankItem>
        
        </Grid>

    </div>

    );
}
 
export default BankList;