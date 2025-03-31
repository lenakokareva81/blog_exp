import styled from "styled-components";

const AuthErrorContainer = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const AuthError = styled(AuthErrorContainer)`
  background-color: #fdbdbd;
  margin: 0 0 0 5px;
  padding: 5px;
  font-size: 18px;
  width: 100%;
`;
