import { SEARCH_TEXT_REDUCER } from './types';

const saveText = text => dispatch => {
    dispatch({
        type: SEARCH_TEXT_REDUCER,
        payload: text
    });
}

export default saveText;