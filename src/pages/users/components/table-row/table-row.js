import styled from "styled-components";

const TableRowContainer = ({ className, children, border }) => {
  return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: ${({ border }) => (border ? "1px solid black" : "none")};
  & > div {
    display: flex;
    padding: 0 10px;
  }
  & .users-data {
    padding: 5px;
  }
  & .login-column {
    width: 140px;
  }
  & .register-at-column {
    width: 213px;
  }
  & .role-column {
    width: 150px;
    display: flex;
    & .select {
      height: 20px;
    }
  }
`;
