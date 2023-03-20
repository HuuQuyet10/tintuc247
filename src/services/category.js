import { constants, listUrl, listParams } from "../configs/constants";
import request from "./request";

export function getCategory(topicId) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORY + `topic=${topicId}&source=666666&length=10&db24h=` + constants.API_DB_KEY, options)
        .then((res) => res.data)
        .catch((error) => error);
}


export function getCategorySubId(sub_typeid, topicId, lastApi) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORY + `&topic=${topicId}&source=666666&length=10&db24h=` + constants.API_DB_KEY + `&sub_type_id=${sub_typeid}`, options)
        .then((res) => res.data)
        .catch((error) => error);
}


export function getMoreCategorySubId( lastApi, topicId, sub_typeid) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.CATEGORY + `&last=${lastApi}&topic=${topicId}&source=666666&length=20&db24h=` + constants.API_DB_KEY + `&sub_type_id=${sub_typeid}`, options)
        .then((res) => res.data)
        .catch((error) => error);
}