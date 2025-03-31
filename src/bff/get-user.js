// import { getUsers } from "./index";

export const getUser = async (loginToFind) => {
  return fetch(`http://localhost:3005/users?login=${loginToFind}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser);
  // const users = await getUsers();

  // return users.find(({ login }) => login === loginToFind);
};
