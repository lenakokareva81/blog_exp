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
            <div onClick={onLogout}>
              <Icon id="fa fa-sign-out" margin="0 0 0 10px" />
            </div>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <div onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </div>

        <Link to="/post">
          <Icon id="fa-file-text-o" margin="10px 0 0 10px" />
        </Link>
        <Link to="/users">
          <Icon id="fa-users" margin="10px 0 0 10px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  flex-direction: column;
`;
