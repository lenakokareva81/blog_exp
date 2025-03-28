import { Link } from "react-router-dom";
import { Icon } from "../../../index";
import styled from "styled-components";

const LargeText = styled.div`
  font-size: 48px;
  line-height: 30px;
  margin-top: 30px;
`;
const SmallText = styled.div`
  font-size: 32px;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon id="fa-code" size="70px" margin="0 10px 0 0" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>Веб-разработчика</SmallText>
    </div>
  </Link>
);
export const Logo = styled(LogoContainer)`
  display: flex;
  text-decoration: none;
  color: black;
`;
