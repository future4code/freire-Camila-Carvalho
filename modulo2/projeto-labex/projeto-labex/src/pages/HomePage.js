import React from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';


const HomeContainer = styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2019/09/06/10/36/astronaut-4456106_960_720.jpg");
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
    color:#c2c2ba;
    font-size:5.5em;
    font-family: 'Copperplate' sans-serif;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    padding: 90px;
    
    
`

const BotoesHome = styled.div`
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


const HomePage = () => {
    const navigate = useNavigate() 

    const goToListTripsPage = () => {
        navigate ('/ListTrips')
    }

    const goToLoginPage = () => {
        navigate ('/Login')
    } 

    return(
        <HomeContainer>
            <Titulo>LabeX</Titulo>
            <BotoesHome onClick={goToListTripsPage}>Lista de Viagens</BotoesHome>

            <BotoesHome onClick={goToLoginPage}>Área Administrativa</BotoesHome>
        </HomeContainer>
    )
}

export default HomePage;