import { listUrl, constants } from "./index";
import WebsiteStatic from "./WebsiteStatic";
var resultWebsite;
async function fetchWebsite() {
  try {
    let response = await fetch(constants.API_BASE_URL + listUrl.LIST_OF_AUTHORS);
    let responseJson = await response.json();
    return responseJson.movies;
   } catch(error) {
    console.error(error);
  }
}

export const getWebsite = () => {
  if (!resultWebsite) {
    // fetchWebsite();
    return WebsiteStatic.websites;
  } else {
    fetchWebsite === resultWebsite
    return resultWebsite;
  }
}


export const getArticleSource = (source) => {
  return getWebsite().find((item) => item.id === source);
}

// https://www.convertsimple.com/convert-json-to-javascript/
// https://api.docbao24h.me/docbao24h/api/v1.0/website