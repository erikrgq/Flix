import {TV_AIRING_TODAY} from '../../actions/types';

const initialState = {
    results: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TV_AIRING_TODAY:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}