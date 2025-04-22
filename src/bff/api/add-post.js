import { genedateDate } from "../utils";

export const addPost = ({ title, imageUrl, content }) => {
  return fetch("http://localhost:3005/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      title: title,
      image_url: imageUrl,
      content: content,
      published_at: genedateDate(),
    }),
  }).then((createdPost) => createdPost.json());
};
