import { addComment, getComments, getPost, getUsers } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans";
import { getCommentsWhithAutor } from "../utils";

export const addPostComment = async (hash, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const acsess = await sessions.access(hash, accessRoles);

  if (!acsess) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  await addComment(userId, postId, content);
  const post = await getPost(postId);

  const commentWhithAutor = await getCommentsWhithAutor(postId, post);

  return {
    error: null,
    res: { ...post, comments: commentWhithAutor },
  };
};
