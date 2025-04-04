import { sessions } from "../sessions";
import { getUsers } from "../api";
import { ROLE } from "../constans";

export const fetchUsers = async (userSession) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "доступ запрещен",
      res: null,
    };
  }

  const users = await getUsers();

  return {
    error: null,
    res: users,
  };
};
