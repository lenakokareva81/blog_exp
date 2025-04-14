import { genedateDate } from "../utils";

export const addComment = (userId, postId, content) => {
  return fetch("http://localhost:3005/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      autor_id: userId,
      post_id: postId,
      content: content,
      published_at: genedateDate(),
    }),
  });
};
