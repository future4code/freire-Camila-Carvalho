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
        <p>1. Qual o seu nome? </p>
        <input
            value={nome}
            onChange={onChangeNome}
        />
        <p> 2. Qual a sua idade </p>
        <input
            value={idade}
            onChange={onChangeIdade}
        />
        <p> 3. Qual o seu email? </p>
        <input
            value={email}
            onChange={onChangeEmail}
        />

        <p>4. Qual o seu nível de escolaridade?</p>
        <select value={selecione} onChange={onChangeSelecione} />
        <option value="ensino medio incompleto">Ensino Médio incompleto</option>
        <option value="ensino medio completo">Ensino Médio completo</option>
        <option value="ensino superior incompleto">Ensino Superior incompleto</option>
        <option value="ensino superior completo">Ensino Superior completo</option>
        <option value="pós graduação incompleto">Pós-graduação incompleto</option>
        <option value="pós graduação">Pós-graduação</option>
        
        <button onClick={ () => props.setEtapa(1)}>Próxima Etapa</button>

      
    </div>
  );
}

export default Etapa1;