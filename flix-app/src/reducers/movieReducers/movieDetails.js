import {MOVIE_DETAILS} from '../../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOVIE_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}