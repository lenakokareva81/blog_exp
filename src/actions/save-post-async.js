import { setPostData } from "./set-post-data";

export const savePostAsync = (requestserver, newPostData) => (dispatch) =>
  requestserver("savePost", newPostData).then((updatedPost) => {
    dispatch(setPostData(updatedPost.res));
    console.log(updatedPost.res);
    return updatedPost.res;
  });
