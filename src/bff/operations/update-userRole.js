import { setUserRole } from "../api";
import { ROLE } from "../constans";
import { sessions } from "../sessions";

export const updateUserRole = async (hash, userId, newUserRoleId) => {
  const accessRoles = [ROLE.ADMIN];
  const acsess = await sessions.access(hash, accessRoles);

  if (!acsess) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  setUserRole(userId, newUserRoleId);
  return {
    error: null,
    res: true,
  };
};
