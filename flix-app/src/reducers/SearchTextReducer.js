import { SEARCH_TEXT_REDUCER } from '../actions/types';

const initialState = {
    searchInput: "",
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SEARCH_TEXT_REDUCER:
            return{
                ...state,
                searchInput: action.payload,
                loading: false
            };
        default:
            return state;
    }
};