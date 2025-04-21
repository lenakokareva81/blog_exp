import { deleteComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const access = await sessions.access(hash, accessRoles);
  console.log(access);
  if (!access) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  await deleteComment(id);
  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
