import React, {useEffect} from 'react'

import { 
    Grid, 
    Typography,
    Divider
} from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { getBankList } from '../redux/actions/bankList'

import { makeStyles } from '@material-ui/core/styles';
import BankItem from '../components/bankList/bankItem';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '30px'
    },
  }));

const BankList = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getBankList());
    }, []) // eslint-disable-line

    const { banks } = useSelector(state => state.BankList)

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
            {
                banks.length === 0 ?
                "No hay nadap" 
                : 
                banks.map(bank => (
                    <BankItem bank={bank}/>
                ))
                
            }
        
        </Grid>

    </div>

    );
}
 
export default BankList;