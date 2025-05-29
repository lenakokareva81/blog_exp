import { getPost, getComments, getUsers } from "../api";
import { getCommentsWhithAutor } from "../utils";

export const fetchPost = async (postId) => {
  let post;
  let error;

  try {
    post = await getPost(postId);
  } catch (postError) {
    error = postError;
  }

  if (error) {
    return {
      error,
      res: null,
    };
  }

  const commentWhithAutor = await getCommentsWhithAutor(postId, post);

  return {
    error: null,
    res: { ...post, comments: commentWhithAutor },
  };
};
