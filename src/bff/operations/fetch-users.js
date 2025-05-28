import { sessions } from "../sessions";
import { getUsers } from "../api";
import { ROLE } from "../constans";

export const fetchUsers = async (hash) => {
  const accessRoles = [ROLE.ADMIN];
  const access = await sessions.access(hash, accessRoles);

  if (!access) {
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
