import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Pedro"}
        fotoUsuario={"https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_960_720.jpg"}
        fotoPost={"https://cdn.pixabay.com/photo/2022/04/04/18/17/sunset-7112018_960_720.jpg"}
      />

      <Post
        nomeUsuario={"Ana"}
        fotoUsuario={"https://cdn.pixabay.com/photo/2022/06/27/02/22/woman-7286576_960_720.jpg"}
        fotoPost={"https://cdn.pixabay.com/photo/2021/12/29/18/28/animal-6902459_960_720.jpg"}
      />

      <Post
        nomeUsuario={"Maria"}
        fotoUsuario={"https://cdn.pixabay.com/photo/2022/04/30/14/04/woman-7165664_960_720.jpg"}
        fotoPost={"https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg"}
      />
    </MainContainer>
  );
}

export default App;
