import { addPost, setUserRole } from "../api";
import { updatePost } from "../api/update-post";
import { ROLE } from "../constans";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const acsess = await sessions.access(hash, accessRoles);

  if (!acsess) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  const savededPost =
    newPostData.id === ""
      ? await addPost(newPostData)
      : await updatePost(newPostData);

  return {
    error: null,
    res: savededPost,
  };
};
