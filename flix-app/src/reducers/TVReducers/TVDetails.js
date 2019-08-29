import {TV_DETAILS} from '../../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    switch (action.type) {
        case TV_DETAILS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}