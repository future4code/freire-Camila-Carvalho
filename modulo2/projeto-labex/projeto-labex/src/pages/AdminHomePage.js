import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const AdminHomeContainer = styled.div`
    background-image: url('https://cdn.pixabay.com/photo/2015/09/20/00/11/night-sky-947862_960_720.jpg');
    position: absolute;
    opacity: 0.9;
    display: block;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin:0;
    max-width: 100%;
`

const Titulo = styled.h1`
    color: #c2c2ba;
`


const BotoesAdm = styled.div`

    display: inline-block;
    display: center;
    text-align: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #1f1b3d; 
    color:#c2c2ba;
    flex-wrap: wrap;

    font-family: 'Copperplate' sans-serif;
    font-weight: bold;
    font-size: large;
    padding: 0.5em;
    border: 1px solid #59429d;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    
    width: 250px;
`

const AdminHomePage = () => {
    const navigate = useNavigate()


    const goBack = () =>{
        navigate ('/')

    }

    const goToCreateTripPage = () =>{
        navigate('./Create')

    }

    const goToLogin = () => {
        navigate('./Login')
    }


    return(
        <AdminHomeContainer>
            <Titulo>Painel Área Administrativa</Titulo>
            <BotoesAdm onClick={goBack}>Voltar</BotoesAdm>
            <BotoesAdm onClick={goToCreateTripPage} >Criar Viagem</BotoesAdm>
            <BotoesAdm onClick={goToLogin}>Logout</BotoesAdm>
        </AdminHomeContainer>
    )
}

export default AdminHomePage;