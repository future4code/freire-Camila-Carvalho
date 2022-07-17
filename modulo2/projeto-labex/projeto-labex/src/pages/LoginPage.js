import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2015/09/20/00/11/night-sky-947862_960_720.jpg");
    position: absolute;
    //opacity: 0.9;
    display: block;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin:0;

    max-width: 100%;
    //height: auto;
  
`

const Titulo = styled.h1`
    color: #c2c2ba;
    text-align: center;
    
`

const LoginDiv = styled.div`
    color: #c2c2ba;
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 300px;

`

const FormDiv = styled.div`
    flex-direction: column;
    display: flex;
    height: 30vh;
    padding: 2em;
    
`





const LoginPage = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({email: "", password: ""});

    const handleInput = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
     };

    const login = (event) => {
    event.preventDefault();
    }

    

    const goBack = () =>{
        navigate('/')
    }

    const goOn = () =>{
        navigate('/AdminHome')
    }

    return(
        <ContainerPrincipal>
        <Titulo>Login</Titulo>
        <FormDiv onSubmit={login}>
            <input
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder={"E-mail"}
            required
            type="email"
            />
            <input
            name="password"
            value={form.password}
            onChange={handleInput}
            placeholder={"Senha"}
            required
		    type="password"
            pattern={"^.{3,}"}
            title={"Sua senha deve ter no mínimo 3 caracteres"}
            />
        </FormDiv>
         
            <button onClick={goBack}>Voltar</button>
            <button onClick={goOn}>Entrar</button>

        </ContainerPrincipal>
    )


}

export default LoginPage;