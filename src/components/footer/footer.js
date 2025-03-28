import styled from "styled-components";

const FooterContainer = ({ className }) => (
  <footer className={className}>
    <div>
      <div>веб разработчик </div>
      <div>емайл</div>
    </div>
    <div>
      <div>дата </div>
      <div>погода</div>
    </div>
  </footer>
);
export const Footer = styled(FooterContainer)`
  height: 150px;
  width: 1000px;
  background-color: white;
  padding: 20px 40px;
  top: 0;
  box-shadow: 0 2px 15px #000;
  display: flex;
  justify-content: space-between;
`;
