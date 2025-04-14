import { H4, Content } from "../../components";

import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { ROLE } from "../../constans";

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);

  const requestServer = useServerRequest();

  const onUserDelete = (userId) => {
    requestServer("removeUser", userId).then(() => {
      // const newUsers = users.filter(({ id }) => id !== userId);
      // setUsers(newUsers);
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  useEffect(() => {
    Promise.all([
      requestServer(`fetchUsers`),
      requestServer(`fetchRoles`),
    ]).then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error);
        return;
      }

      setUsers(usersRes.res);
      setRoles(rolesRes.res);
    });
  }, [requestServer, shouldUpdateUserList]);

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <H4> пользователи</H4>
        <TableRow>
          <div className="login-column">Логин</div>
          <div className="register-at-column">дата регистрации</div>
          <div className="role-column">роль</div>
        </TableRow>

        {users.map(({ id, login, registeredAt, roleId }) => (
          <UserRow
            key={id}
            id={id}
            login={login}
            registeredAt={registeredAt}
            roleId={roleId}
            roles={roles.filter(({ id }) => Number(id) !== ROLE.GUEST)}
            onUserDelete={() => onUserDelete(id)}
          />
        ))}
      </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
  margin: 0 auto;
`;
