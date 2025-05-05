import { getPosts, getComments } from "../api";

import { getCommentsCount } from "../utils";

export const fetchPosts = async () => {
  const posts = await getPosts();
  const comments = await getComments();
  //   const [posts, comments] = Promise.all([getPosts(), getComments()]);

  return {
    error: null,
    res: posts.map((post) => ({
      ...post,
      commentsCount: getCommentsCount(comments, post.id),
    })),
  };
};
