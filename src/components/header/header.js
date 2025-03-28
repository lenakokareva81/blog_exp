import { Logo, ControlPanel } from "./components";
import styled from "styled-components";
const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <ControlPanel />
  </header>
);
export const Header = styled(HeaderContainer)`
  height: 150px;
  position: fixed;
  width: 1000px;
  background-color: white;
  padding: 20px 40px;
  top: 0;
  box-shadow: 0 -2px 15px #000;
  display: flex;
  justify-content: space-between;
`;
