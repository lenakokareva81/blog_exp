import { H4, Content, PrivetContent } from "../../components";

import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { checkAccess } from "../../utils";
import styled from "styled-components";
import { ROLE } from "../../constans";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
  const userRole = useSelector(selectUserRole);
  const requestServer = useServerRequest();

  const onUserDelete = (userId) => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }
    requestServer("removeUser", userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      return;
    }
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
  }, [requestServer, shouldUpdateUserList, userRole]);

  return (
    <div className={className}>
      <PrivetContent access={[ROLE.ADMIN]} serverError={errorMessage}>
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
      </PrivetContent>
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
