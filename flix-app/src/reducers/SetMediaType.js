import { SET_MEDIA_TYPE_TV, SET_MEDIA_TYPE_MOVIE } from '../actions/types';

const initialState = {
    mediaType: 'MOVIE'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MEDIA_TYPE_MOVIE:
            return {
                mediaType: 'MOVIE'
            };
        case SET_MEDIA_TYPE_TV:
            return {
                mediaType: 'TV'
            }
        default:
            return state;
    }
};