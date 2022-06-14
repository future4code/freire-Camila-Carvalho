import React from 'react';

import './App.css';
import {useState} from 'react';

function App() {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value)

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData  = new FormData(event.target);
    const data = Object.fromEntries(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>1. Qual o seu nome?</h1>
      <input type="text" name="Nome" placeholder="Nome" onChange={handleInputChange} value={value}/>
      <h1>2. Qual a sua idade?</h1>
      <input type="text" name="Nome" placeholder="Idade" onChange={handleInputChange} value={value}/>
      <h1>3. Qual o seu E-mail?</h1>
      <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={value}/>
      <h1>4. Qual a sua Escolaridade?</h1>
      <select id='escolaridade'>
        <option>Ensino Médio Incompleto</option>
        <option>Ensino Médio Completo</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
      </select>
      <br></br>
      <button type='submit'>Próxima Etapa</button>
  </form> 

  );
  }
     

export default App;
