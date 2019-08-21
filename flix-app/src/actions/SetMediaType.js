import { SET_MEDIA_TYPE_TV, SET_MEDIA_TYPE_MOVIE } from '../actions/types';

const setMediaTypeMovie = mediaType => ({
    mediaType: type === 'TV' ? SET_MEDIA_TYPE_TV : SET_MEDIA_TYPE_MOVIE
});

export default setMediaTypeMovie;