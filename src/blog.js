import { Route, Routes } from "react-router-dom";
import { Autorization, Registration } from "./pages";
import styled from "styled-components";
import { Header, Footer } from "./components";

// json-server --watch src/db.json --port 3005

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: space-between;
  min-height: 100%;
  background-color: #ffff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 150px 0;
`;

export const Blog = () => {
  return (
    <AppColumn>
      <Header />

      <Content>
        <Routes>
          <Route path="/" element={<div>главная страница</div>} />
          <Route path="/post" element={<div>статья</div>} />
          <Route path="/post/:postId" element={<div>новая статья</div>} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<div>пользователи</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
};
