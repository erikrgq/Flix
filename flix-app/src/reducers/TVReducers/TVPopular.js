import {POPULAR_TV} from '../../actions/types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case POPULAR_TV:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}