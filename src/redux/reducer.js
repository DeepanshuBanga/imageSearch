import { LOAD_MORE, SEARCH_PHOTO } from "./type.js";

const initialState = {
  query: "",
  images: [],
  page: 1,
  total: 0,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PHOTO:
      return {
        ...state,
        query: action.payload.name,
        images: action.payload.photos_url,
        total: action.payload.total,
      };
    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
        images: state.images.concat(action.payload.photos),
      };
    default:
      return initialState;
  }
};

export default searchReducer;
