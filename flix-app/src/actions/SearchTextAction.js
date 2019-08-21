import { SEARCH_TEXT_REDUCER } from './types';

export const saveText = searchInput => dispatch => {
    dispatch({
        type: SEARCH_TEXT_REDUCER,
        payload: searchInput
    });
};

export default saveText; 
