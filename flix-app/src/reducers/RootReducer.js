import {combineReducers} from 'redux';
import ApiKeyConfigReducer from './ApiKeyConfigReducer';
import PostSearchResultReducer from './PostSearchResultReducer';
import SearchResultReducer from './SearchResultReducer';
import SearchTextReducer from './SearchTextReducer';
import SetMediaType from './SetMediaType';

import trendingMovie from './movieReducers/trendingMovie';
import movieGenre from './movieReducers/movieGenre';
import nowPlayingMovies from './movieReducers/nowPlayingMovies';
import popularMovies from './movieReducers/popularMovies';
import topRatedMovies from './movieReducers/topRatedMovies';
import upcomingMovies from './movieReducers/upcomingMovies';

import trendingTV from './TVReducers/trendingTV';
import tvGenre from './TVReducers/tvGenre';
import TVAiringToday from './TVReducers/TVAiringToday';
import TVOnAir from './TVReducers/TVOnAir';
import TVPopular from './TVReducers/TVPopular';
import topRated from './TVReducers/topRated';

export default combineReducers({
    ApiKeyConfig: ApiKeyConfigReducer,
    PostSearchResultReducer,
    searchResult: SearchResultReducer,
    searchText: SearchTextReducer,
    setMediaType: SetMediaType,
    trendingMovie,
    movieGenre,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,

    trendingTV,
    tvGenre,
    TVAiringToday,
    TVOnAir,
    TVPopular,
    topRated,
});