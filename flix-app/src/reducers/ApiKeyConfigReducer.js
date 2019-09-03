import {API_KEY_CONFIG} from '../actions/types';

const initialState = {
    apiKey: '204a23cc979d825bf52238aed9a22056',
    backup: 'http://s3.amazonaws.com/nvest/Blank_Club_Website_Avatar_Gray.jpg',
    backupPoster: 'https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png',
};

export default function(state = initialState, action) {
    switch(action.type){
        case API_KEY_CONFIG:
            return {
                ...state,
                ...action.payload
            };   
        default:
            return state;
    }
};