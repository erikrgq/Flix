import {TRENDING_MOVIE} from '../../actions/types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TRENDING_MOVIE:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}