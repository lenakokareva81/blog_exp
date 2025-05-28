import { getPost, getComments, getUsers } from "../api";

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

  const comments = await getComments(postId);
  const users = await getUsers();

  const commentWhithAutor = comments.map((comment) => {
    if (post.id === comment.postId) {
      const user = users.find(({ id }) => id === comment.autorId);
      return {
        ...comment,
        author: user?.login,
      };
    }
  });

  return {
    error: null,
    res: { ...post, comments: commentWhithAutor },
  };
};
