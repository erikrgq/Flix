import {combineReducers} from 'redux';
import ApiKeyConfigReducer from './ApiKeyConfigReducer';
import PostSearchResultReducer from './PostSearchResultReducer';
import SearchResultReducer from './SearchResultReducer';
import SearchTextReducer from './SearchTextReducer';

export default combineReducers({
    ApiKeyConfig: ApiKeyConfigReducer,
    PostSearchResultReducer,
    SearchResultReducer,
    searchText: SearchTextReducer
});