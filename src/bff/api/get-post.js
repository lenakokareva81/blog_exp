import { transformPost } from "../../transformers";

export const getPost = async (postId) => {
  return fetch(`http://localhost:3005/posts/${postId}`)
    .then((res) => {
      if (res.ok) {
        return res;
      }

      const error =
        res.status === 404
          ? "такая страница не существует"
          : "что то пошло не так";

      return Promise.reject(error);
    })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
};
