import React, { useState } from 'react';

function Etapa2(props) {
  const [curso, setCurso] = useState("")
  const [unidade, setUnidade] = useState("")

  const onChangeCurso = (event) => {
    setCurso(event.target.value)
}

const onChangeUnidade = (event) => {
    setUnidade(event.target.value)
}

  return (
    <div>
      <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
      <p>5. Qual curso</p>
        <input
            value={curso}
            onChange={onChangeCurso}
        />
        <p>6. Qual a unidade de ensino? </p>
        <input
            value={unidade}
            onChange={onChangeUnidade}
        />

      <button onClick={ () => props.setEtapa(2)}>Próxima Etapa</button>

      
    </div>
  );
}

export default Etapa2;