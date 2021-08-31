import searchReducer from "./reducer.js";
import { LOAD_MORE, SEARCH_PHOTO } from "./type.js";

export const searchPhoto = (photos_url = [], name = "", total) => {
  console.log(name);
  return {
    type: SEARCH_PHOTO,

    payload: {
      photos_url: photos_url,
      name: name,
      total: total,
    },
  };
};

export const loadMore = (photos) => {
  return {
    type: LOAD_MORE,

    payload: { photos: photos },
  };
};
