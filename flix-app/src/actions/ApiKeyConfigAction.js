import {API_KEY_CONFIG} from './types';
import Axios from 'axios';

const saveApiKeyConfig = payload =>({
    type: API_KEY_CONFIG,
    payload
});

const apiKeyAndConfig = url => dispatch => {
        Axios.get(url)
        .then(response => dispatch(saveApiKeyConfig(response.data)))
        .catch(error => console.log(error));
};

export default apiKeyAndConfig;