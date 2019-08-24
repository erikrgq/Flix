import {MOVIE_GENRE} from '../../actions/types';

const initialState = {
    genres: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case MOVIE_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
};