import { removeComment } from "./session";
import { ROLE } from "../constans";

export const createSession = (roleId) => {
  const session = {
    logout() {
      Object.keys(session).forEach((key) => delete session[key]);
    },
  };
  switch (roleId) {
    case ROLE.ADMIN: {
      session.removeComment = removeComment;
      break;
    }
    case ROLE.MODERATOR: {
      break;
    }
    case ROLE.READER: {
      break;
    }
    default:
  }
};
