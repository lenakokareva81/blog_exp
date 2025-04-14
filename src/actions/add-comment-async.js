import { setPostData } from "./set-post-data";

export const addCommentAsync =
  (requestserver, userId, postId, content) => (dispatch) =>
    requestserver("addPostComment", userId, postId, content).then((postData) =>
      dispatch(setPostData(postData.res))
    );
