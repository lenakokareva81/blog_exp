import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = ({ children, className, width, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonContainer)`
  width: ${({ width = "100%" }) => width};
  display: flex;
  margin: 5px;
  height: 30px;
  font-size: 18px;
  border: 1px solid #000;
  justify-content: space-evenly;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};
