import { constants, listUrl, listParams } from "../configs/constants";
import request from "./request";

export function getNews(articleIds) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.ARTICLE_DETAILS + `articleId=${decodeURI(articleIds)}` + "&db24h=" + constants.API_DB_KEY, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}

export function getRelatedNews(articleId) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.RELATED_ARTICLES + `articleId=${decodeURI(articleId)}` + "&db24h=" + constants.API_DB_KEY + `&length=6`, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}


export function getCategories(last, articleId) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORIES + `articleId=${decodeURI(articleId)}` + "&db24h=" + constants.API_DB_KEY + `&length=6`, options)
        .then((res) => res.data)
        .catch((error) => {
            console.log(error)
        })
}
