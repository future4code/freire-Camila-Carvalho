import React, { useState } from 'react';

function Etapa1(props) {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState = ("")
    const [selecione, setSelecione] = useState("")

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }

    const onChangeIdade = (event) => {
        setIdade(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSelecione = (event) => {
        setSelecione(event.target.value)
    }



  return (
    <div>
        <h1>Etapa 1 - DADOS GERAIS</h1>
        <input
            value={nome}
            onChange={onChangeNome}
        > 1. Qual o seu nome? </input>
        <input
        > 1. Qual o sua idade? </input>
        <input> 1. Qual o seu email? </input>
        <select> 1. Qual o seu nível de escolaridade? </select>
        <option>Ensino Médio incompleto</option>
        <option>Ensino Médio completo</option>
        <option>Ensino Superior incompleto</option>
        <option>Pós-graduação incompleto</option>
        <option>Pós-graduação</option>
        
        <button onClick={ () => props.setEtapa(1)}>Próxima Etapa</button>

      
    </div>
  );
}

export default Etapa1;