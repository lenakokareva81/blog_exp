import { Link, useNavigate } from "react-router-dom";
import { Icon, Button } from "../../../index";
import { useSelector } from "react-redux";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../../selectors/index";
import { ROLE } from "../../../../constans";
import { useDispatch } from "react-redux";
import { logout } from "../../../../actions";
import { checkAccess } from "../../../../utils";
import styled from "styled-components";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: flex;
  width: 100px;
  height: 30px;
  font-size: 18px;
  border: 1px solid #000;
  justify-content: space-evenly;
`;
const UserName = styled.div``;

const StyledBack = styled.div``;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  const onLogout = () => {
    dispatch(logout(session));
    sessionStorage.removeItem("userData");
  };

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);
  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>

            <Icon id="fa fa-sign-out" margin="0 0 0 10px" onClick={onLogout} />
          </>
        )}
      </RightAligned>
      <RightAligned>
        <div onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" isButton={true} />
        </div>
        {isAdmin && (
          <>
            <Link to="/post">
              <Icon
                id="fa-file-text-o"
                margin="10px 0 0 10px"
                isButton={true}
              />
            </Link>
            <Link to="/users">
              <Icon id="fa-users" margin="10px 0 0 10px" isButton={true} />
            </Link>
          </>
        )}
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
`;
