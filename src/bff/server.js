import { getUser, addUser } from "./index";
import { sessions } from "./sessions";

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async autorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: "такой пользователь не найден",
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: "пароли не сoвпадают",
        res: null,
      };
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    };
  },
  async register(regLogin, regPassword) {
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
  },
};
