import { SEARCH_TEXT_REDUCER } from '../actions/types';

const initialState = {
    text: ""
};

const searchText = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_TEXT_REDUCER:
            return{
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
};

export default searchText;