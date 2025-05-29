import { deleteComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans";
import { getCommentsWhithAutor } from "../utils";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const access = await sessions.access(hash, accessRoles);

  if (!access) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  await deleteComment(id);
  const post = await getPost(postId);

  const commentWhithAutor = await getCommentsWhithAutor(postId, post);
  return {
    error: null,
    res: { ...post, comments: commentWhithAutor },
  };
};
