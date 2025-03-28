import styled from "styled-components";
import { forwardRef } from "react";

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  width: ${({ width = "100%" }) => width};
  height: 20px;
  margin: 5px;
`;
