import { constants, listUrl } from "../configs/constants";
import request from "./request";

export function getListItemSearch(KeySearch) {
    const options = {
        method: "GET"
    };
    return request(constants.API_BASE_URL + listUrl.SEARCH + `db24h=${constants.API_DB_KEY}&keywords=${encodeURI(KeySearch)}&limit=20&articleId=`, options)
        .then((res) => res.data)
        .catch((error) => error);
}