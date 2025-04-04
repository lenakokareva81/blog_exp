import { sessions } from "../sessions";
import { getUser } from "../api";

export const autorize = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  if (!user) {
    return {
      error: "такой пользователь не найден",
      res: null,
    };
  }
  const { login, password, roleId, id } = user;
  if (authPassword !== password) {
    return {
      error: "пароли не сoвпадают",
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
  };
};
