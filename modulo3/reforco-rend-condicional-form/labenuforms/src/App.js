import React, { useState } from 'react';
import Etapa1 from './Components/Etapa1';
import Etapa2 from './Components/Etapa2';
import Etapa3 from './Components/Etapa3';
import Final from './Components/Final';
import styled from 'styled-components';



function App() {
  const [telaAtual, setTelaAtual] = useState("tela1")
  return (
    <div>

      <Etapa1 />
      
    </div>
  );
}

export default App;
