import styled from "styled-components";
import { H4 } from "../h4/h4";

const ErrorContainer = ({ className, error }) => {
  return (
    <div className={className}>
      <H4>ошибка</H4>
      <div>{error}</div>
    </div>
  );
};

export const Error = styled(ErrorContainer)`
  margin: 0 0 0 5px;
  padding: 5px;
  font-size: 18px;
  width: 100%;
`;
