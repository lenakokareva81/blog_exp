import { sessions } from "../sessions";
import { getRoles } from "../api";
import { ROLE } from "../constans";

export const fetchRoles = async (userSession) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  const roles = await getRoles();

  return {
    error: null,
    res: roles,
  };
};
