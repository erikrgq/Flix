import {combineReducers} from 'redux';
import ApiKeyConfigReducer from './ApiKeyConfigReducer';
import PostSearchResultReducer from './PostSearchResultReducer';
import SearchResultReducer from './SearchResultReducer';
import SearchTextReducer from './SearchTextReducer';
import SetMediaType from './SetMediaType';

export default combineReducers({
    ApiKeyConfig: ApiKeyConfigReducer,
    PostSearchResultReducer,
    searchResult: SearchResultReducer,
    searchText: SearchTextReducer,
    setMediaType: SetMediaType,
});