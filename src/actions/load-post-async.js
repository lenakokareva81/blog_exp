import { setPostData } from "./set-post-data";

export const loadPostAsync = (requestserver, postId) => (dispatch) => {
  requestserver("fetchPost", postId).then((postData) =>
    dispatch(setPostData(postData.res))
  );
};
