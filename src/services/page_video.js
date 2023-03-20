import { constants, listUrl, listParams } from "../configs/constants";
import request from "./request";
export function getVideoHome() {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORY_VIDEOS + `topic=666666&last=-1&length=10&db24h=` + constants.API_DB_KEY, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}
export function getRelatedVideos(articleId) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.RELATED_VIDEOS + "db24h=" + constants.API_DB_KEY + `&last=-1&length=10&topic=666666&articleId=${articleId}`, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}

export function getVideoCatalog(topicId) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORY_VIDEOS + `topic=${topicId}&last=-1&length=20&db24h=` + constants.API_DB_KEY, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}
