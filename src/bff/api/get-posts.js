import { transformPost } from "../../transformers";
export const getPosts = (searchPhrase, page, limit) => {
  return fetch(
    `http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_per_page=${limit}`
  )
    .then((loadedPosts) => loadedPosts.json())
    .then((loadedPosts) => ({
      posts: loadedPosts.data.map(transformPost),
      last: loadedPosts.last,
    }));
};
// loadedPosts.data &&
