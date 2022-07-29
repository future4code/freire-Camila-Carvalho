import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #cfc2ce;
  
  
`;


const InputDiv = styled.div`
  
  box-shadow: #636350;
  width: 30%;
  display:flex;
  flex-direction: column;
  padding: 20px;
  

  input {
    border-radius: 8px;
    border: 1px solid #59429d;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    box-shadow: #454b8a;
    height: 26px;
    margin-bottom: 10px; 
  }


  button{
    font-size: 1.2em;
    background: #59429d;
    border: 0;
    margin-bottom: 1em;
    color: #ffffff;
    padding: 0.2em 0.6em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);

    

  }
 

`

function App() {
  const [inputNomeUsuario, setInputNomeUsuario] = useState()
  const [inputFotoUsuario, setInputFotoUsuario] = useState()
  const [inputFotoPost, setInputFotoPost] = useState()
  const [posts, setPosts] = useState(
    [
      {
        nomeUsuario: "Pedro",
        fotoUsuario: "https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_960_720.jpg",
        fotoPost: "https://cdn.pixabay.com/photo/2022/04/04/18/17/sunset-7112018_960_720.jpg"

      },
      {
        nomeUsuario: "Ana",
        fotoUsuario: "https://cdn.pixabay.com/photo/2022/06/27/02/22/woman-7286576_960_720.jpg",
        fotoPost: "https://cdn.pixabay.com/photo/2021/12/29/18/28/animal-6902459_960_720.jpg"
      },
      {
        nomeUsuario: "Maria",
        fotoUsuario: "https://cdn.pixabay.com/photo/2022/04/30/14/04/woman-7165664_960_720.jpg",
        fotoPost: "https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg"

      }
    ]
  )

    const addPost = () => {
      const novoPost = {

        nomeUsuario: inputNomeUsuario,
        fotoUsuario: inputFotoUsuario,
        fotoPost: inputFotoPost
      }

      const copyPost = [...posts, novoPost]
        setPosts(copyPost)
    }

    const onChangeInputNomeUsuario = (event) => {
      setInputNomeUsuario(event.target.value)
    }

    const onChangeInputFotoUsuario = (event) => {
      setInputFotoUsuario(event.target.value)
    }

    const onChangeInputFotoPost = (event) => {
      setInputFotoPost(event.target.value)
    }

    const ListaDePosts = posts.map((post, index) => {
      return (

       
        <Post key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
      )
    })

  return (   
    <MainContainer>

      <Header />
        <InputDiv> 

          <input
            placeholder="Nome do Usuário"
            value={inputNomeUsuario}
            onChange={onChangeInputNomeUsuario}
          />

          <input
            placeholder="Foto Usuário"
            value={inputFotoUsuario}
            onChange={onChangeInputFotoUsuario}
          />

          <input
            placeholder="Foto Post"
            value={inputFotoPost}
            onChange={onChangeInputFotoPost}
          />

          <button onClick={addPost} >Adicionar</button>
        </InputDiv> 
    


        <div>
          {ListaDePosts}
        </div>

          
    </MainContainer>
  );
}

export default App;
