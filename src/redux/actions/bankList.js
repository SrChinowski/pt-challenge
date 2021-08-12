import {
    GET_BANKLIST,
    GET_BANKLIST_OK,
    GET_BANKLIST_ERROR
} from '../types'

import { API_URL } from '../../constants/common'
import axios from 'axios'

//Debug
const debug = {
    data: false,
    errors: true
}

//Obtiene elementos 
export function getBankList() {
    return async (dispatch) => {
        dispatch(getBanklistFromAPI())

        await axios.get(API_URL)
        .then(function (res) {
            debug.data && console.log(res.data);
            dispatch(getBanklistFromAPI_OK(res.data))
        })
        .catch(function (error){
            debug.errors && console.log(error);
            dispatch(getBanklistFromAPI_ERROR() )
        })
    }
}

//Funciones
const getBanklistFromAPI = () => ({
    type: GET_BANKLIST,
    payload: true
})

const getBanklistFromAPI_OK = items => ({
    type: GET_BANKLIST_OK,
    payload: items
})

const getBanklistFromAPI_ERROR = () => ({
    type: GET_BANKLIST_ERROR,
    payload: true
})