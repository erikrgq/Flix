import { POST_SEARCH_RESULT } from './types';

const postSearchResult = payload => ({
    type: POST_SEARCH_RESULT,
    payload
});

export default postSearchResult;