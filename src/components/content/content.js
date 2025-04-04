import styled from "styled-components";
import { H4 } from "../h4/h4";

const ContentContainer = ({ className, children, error }) => {
  return error ? (
    <>
      <H4>ошибка</H4>
      <div>{error}</div>{" "}
    </>
  ) : (
    <>{children}</>
  );
};
export const Content = styled(ContentContainer)`
  width: ${({ width = "100%" }) => width};
  height: 20px;
  margin: 5px;
`;
