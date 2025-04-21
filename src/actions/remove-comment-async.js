import { setPostData } from "./set-post-data";

export const removeCommentAsync = (requestserver, postId, id) => (dispatch) =>
  requestserver("removePostComment", id, postId).then((postData) =>
    dispatch(setPostData(postData.res))
  );
