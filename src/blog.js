import { Route, Routes } from "react-router-dom";
import { Autorization, Registration, Users, Post } from "./pages";
import styled from "styled-components";
import { Header, Footer, Modal } from "./components";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";

//json-server --watch src/db.json --port 3005

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  justify-content: space-between;
  min-height: 100%;
  background-color: #ffff;
  margin: 0 auto;
`;

const Page = styled.div`
  padding: 150px 0;
`;

export const Blog = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");
    const currentUserData = JSON.parse(currentUserDataJSON);
    if (!currentUserData) {
      return;
    }
    dispatch(
      setUser({ ...currentUserData, role_id: Number(currentUserData.roleId) })
    );
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />

      <Page>
        <Routes>
          <Route path="/" element={<div>главная страница</div>} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Post />} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Page>
      <Modal />
      <Footer />
    </AppColumn>
  );
};
