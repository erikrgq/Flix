import {MOVIE_REVIEWS} from '../../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOVIE_REVIEWS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}