import React, { useState } from 'react';
import Header from './Components/Header/Header';

function App() {

  const [mensagemEnviada, setMensagemEnviada] = useState()

  const [valorInputRemetente, setValorInputRemetente] = useState()

  const [valorInputMensagem, setValorInputMensagem] = useState()


  const enviarMensagem = () => {
    const novaMensagem = {
      usuario: valorInputRemetente,
      mensagem: valorInputMensagem
    }

    const novoEnvioDeMensagem = [... mensagemEnviada, novaMensagem]

    setMensagemEnviada(novoEnvioDeMensagem)
  }

  const onChangeInputRemetente = (event) => {
    setValorInputRemetente(event.target.value)
  }

  const onChangeInputMensagem = (event) => {
    setValorInputMensagem(event.target.value)
  }

  return (
    
    <div >
      <Header 
      
      />

      <input
      value={valorInputRemetente}
      onChange={onChangeInputRemetente}
      placeholder="Usuário"
      
      />

      <input
      value={valorInputMensagem}
      onChange={onChangeInputMensagem}
      placeholder="Usuário"
      />

      <button>Enviar</button>
    </div>
  );
}

export default App;
