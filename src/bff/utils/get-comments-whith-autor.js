import { getComments, getUsers } from "../api";

export const getCommentsWhithAutor = async (postId, post) => {
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
  return commentWhithAutor;
};
