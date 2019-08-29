import {TV_REVIEWS} from '../../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case TV_REVIEWS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}