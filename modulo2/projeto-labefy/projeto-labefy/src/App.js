import React from 'react';
import Reacct from 'react';
import styled from 'styled-components';
import AddMusica from './components/AddMusica';


const fundoTela = styled.div`
  background-color: #1a0c21;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-content: space-between;
  
`

export default class App extends React.Component {

  state = {
    trocarTela: "mostrarPlaylists",
  }

  trocarTela = () => {
    this.setState ({trocarTela: !this.state.trocarTela})
  }

}

render() {

  const trocandoTela = () => {
    if (this.state.trocarTela === "mostrarPlaylists") {
      return <Playlistst />
    } if (this.state.trocarTela === "mostrarAddMusicas") 
        return <AddMusica />
    }
  } 
  return(
    <Background>

      <Header />
      {trocandoTela()}

    </Background> 
  );
}
    
};

 

