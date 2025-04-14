import { addComment, getComments, getPost } from "../api";
import { sessions } from "../sessions";
import { ROLE } from "../constans";

export const addPostComment = async (userSession, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
  console.log("addPostComment", userSession);
  // if (!sessions.access(userSession, accessRoles)) {
  //   return {
  //     error: "доступ запрещен",
  //     res: null,
  //   };
  // }

  await addComment(userId, postId, content);
  const post = await getPost(postId);
  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
