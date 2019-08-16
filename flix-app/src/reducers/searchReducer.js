import {SEARCH_RESULT, FETCH_RESULT} from '../actions/types';

const initialState = {
    text: '',
    results: [],
    loading: false,
    result: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_RESULT:
            return {
                ...state,
                text: action.payload,
                loading: false
            };   
        case FETCH_RESULT:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}