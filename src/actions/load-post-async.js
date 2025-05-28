import { setPostData } from "./set-post-data";

export const loadPostAsync = (requestserver, postId) => (dispatch) => {
  return requestserver("fetchPost", postId).then((postData) => {
    if (postData.res) {
      dispatch(setPostData(postData.res));
    }

    return postData;
  });
};
