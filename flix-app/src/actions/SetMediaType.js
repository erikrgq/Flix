import { SET_MEDIA_TYPE_TV, SET_MEDIA_TYPE_MOVIE } from '../actions/types';

const setMediaTypeMovie = type => ({
    type: type === 'TV' ? SET_MEDIA_TYPE_TV : SET_MEDIA_TYPE_MOVIE
});

export default setMediaTypeMovie;