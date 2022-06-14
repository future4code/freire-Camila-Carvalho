import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
      nomeUsuario: 'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario:'aninha',
      fotoUsuario:'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg',
      fotoPost:'https://cdn.pixabay.com/photo/2020/03/15/19/59/castle-4934812_960_720.jpg'
    },
    {
      nomeUsuario:'bia',
      fotoUsuario: 'https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg',
      fotoPost:'https://cdn.pixabay.com/photo/2014/08/27/18/24/girl-429380_960_720.jpg'
    }
  ]
  };

  render() {
    const listaPostsUsuarios = this.state.posts.map((usuario, index) => {

      return (
        <div key={index}>
          <Post
          nomeUsuario = {usuario.nomeUsuario}
          fotoUsuario = {usuario.fotoUsuario}
          fotoPost = {usuario.fotoPost}
          />
        </div>);
      
      });

      return (
      <MainContainer>{listaPostsUsuarios}</MainContainer>
      );
  };
  
}


export default App;
