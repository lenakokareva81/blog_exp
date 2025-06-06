import { Route, Routes } from "react-router-dom";
import { Autorization, Registration, Users, Post } from "./pages";
import styled from "styled-components";
import { Header, Footer, Modal, Error } from "./components";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./actions";
import { Main } from "./pages/main/main";
import { ERROR } from "./constans/error";

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
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/:id/edit" element={<Post />} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
        </Routes>
      </Page>
      <Modal />
      <Footer />
    </AppColumn>
  );
};
