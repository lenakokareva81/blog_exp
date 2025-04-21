import { deleteUser } from "../api";
import { ROLE } from "../constans";
import { sessions } from "../sessions";

export const removeUser = async (hash, userId) => {
  const accessRoles = [ROLE.ADMIN];
  const acsess = await sessions.access(hash, accessRoles);

  if (!acsess) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  deleteUser(userId);
  return {
    error: null,
    res: true,
  };
};
