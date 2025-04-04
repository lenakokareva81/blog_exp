import { sessions } from "../sessions";
import { getUser, addUser } from "../api";

export const register = async (regLogin, regPassword) => {
  const existeduser = await getUser(regLogin);

  if (existeduser) {
    return {
      error: "такой пользователь уже существует",
      res: null,
    };
  }

  const user = await addUser(regLogin, regPassword);

  return {
    error: null,
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
