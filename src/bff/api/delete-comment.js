export const deleteComment = (id) => {
  return fetch(`http://localhost:3005/comments/${id}`, {
    method: "DELETE",
  });
};
