import PropTypes from "prop-types";
import styled from "styled-components";

import { Error } from "../error/error";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { ERROR, PROP_TYPE } from "../../constans";
import { checkAccess } from "../../utils";

const PrivetContentContainer = ({
  className,
  children,
  access,
  serverError = null,
}) => {
  const userRole = useSelector(selectUserRole);
  const accessError = checkAccess(access, userRole)
    ? null
    : ERROR.ACCESS_DENIED;
  const error = serverError || accessError;

  return error ? <Error error={error} /> : <>{children}</>;
};
export const PrivetContent = styled(PrivetContentContainer)`
  width: ${({ width = "100%" }) => width};
  height: 20px;
  margin: 5px;
`;

PrivetContent.propTypes = {
  children: PropTypes.node.isRequired,
  access: PropTypes.arrayOf(PROP_TYPE.ROLE_ID).isRequired,
  serverError: PROP_TYPE.ERROR,
};
