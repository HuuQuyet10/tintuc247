import { constants, listUrl } from '../configs/constants'
import request from '../services/request';
export function getApiHomepage(bodyContentHomePage) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContentHomePage)
    };
    const requestURL = constants.API_BASE_URL + listUrl.HOME_PAGE2;
    return request(requestURL, options);
}


export function getApiFocus() {
    const options = {
        method: 'GET'
    };

    return request(constants.API_BASE_URL_2 + listUrl.HOME_PAGE_FOCUS + `&db24h=${constants.API_DB_KEY}&length=12`, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}