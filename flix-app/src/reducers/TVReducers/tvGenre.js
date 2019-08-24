import {TV_GENRE} from '../../actions/types';

const initialState = {
    genres: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TV_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
};