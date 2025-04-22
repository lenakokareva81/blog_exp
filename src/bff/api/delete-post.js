export const deletePost = (id) => {
  return fetch(`http://localhost:3005/posts/${id}`, {
    method: "DELETE",
  });
};
