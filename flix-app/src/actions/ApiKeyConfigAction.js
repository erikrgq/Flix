import {API_KEY_CONFIG} from './types';

const saveApiKeyConfig = payload =>({
    type: API_KEY_CONFIG,
    payload
});

const apiKeyConfig = url => {
    return dispatch => {
        fetch(url)
        .then(res => res.json())
        .then(data => dispatch(saveApiKeyConfig(data)))
        .catch(error => console.log(error));
    }
};

export default apiKeyConfig;