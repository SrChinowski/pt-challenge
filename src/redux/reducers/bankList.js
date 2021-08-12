import {
    GET_BANKLIST,
    GET_BANKLIST_OK,
    GET_BANKLIST_ERROR
} from '../types'

const initialState = {
    banks: [],
    loading: true,
    error: false
} 

export default function(state = initialState, action ){

    switch(action.type){

        case GET_BANKLIST:
            return {
                ...state,
                loading: action.payload
            }

        case GET_BANKLIST_OK:
            return {
                ...state,
                loading: false,
                error: null,
                banks: action.payload
            }

        case GET_BANKLIST_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:  return state;
    }
}