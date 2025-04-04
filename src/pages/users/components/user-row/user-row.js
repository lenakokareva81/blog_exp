import styled from "styled-components";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/table-row";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";

const UserRowContainer = ({
  className,
  id: userId,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
  onUserDelete,
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const requestServer = useServerRequest();
  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId).then(() =>
      setInitialRoleId(newUserRoleId)
    );
  };

  const isSaveButtonSelected = selectedRoleId === initialRoleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="users-data">
          <div className="login-column">{login}</div>
          <div className="register-at-column">{registeredAt}</div>

          <div className="role-column">
            <select value={selectedRoleId} onChange={onRoleChange}>
              {roles.map(({ id: roleId, name: roleName }) => (
                <option key={roleId} value={roleId}>
                  {roleName}
                </option>
              ))}
            </select>
            <div onClick={() => onRoleSave(userId, selectedRoleId)}>
              <Icon
                id="fa fa-floppy-o"
                size="18px"
                margin="0 0 0 10px"
                disabled={isSaveButtonSelected}
              />
            </div>
          </div>
        </div>
      </TableRow>
      <div onClick={onUserDelete}>
        <Icon id="fa fa-trash-o" size="18px" margin="15px 0 0 5px" />
      </div>
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
`;
