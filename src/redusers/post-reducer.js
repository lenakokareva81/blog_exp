import { ACTION_TYPE } from "../actions";
export const initialPostState = {
  id: "",
  title: "",
  imageUrl: "",
  content: "",
  publishedAt: "",
  comments: [],
};
// { type, payload }
export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
