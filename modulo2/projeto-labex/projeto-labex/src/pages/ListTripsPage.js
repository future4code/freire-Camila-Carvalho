import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

const ListTripsPage = () => {
    const navigate = useNavigate() 
    

    const goBack = () =>{
        navigate('/')
    }

    const goToApplicationForm = () =>{
        navigate('/AppliForm')
    }

    //function ListTripsPage() {
    const [trips, setTrips] = useState([]);

    useEffect (() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-pinheiro/trips')
        .then(resposta => {
          console.log(resposta.data.trips)
          setTrips(resposta.data.trips)
        })
    }, []);
    
    
    return(
        <div>
            <h1>Lista de Viagens</h1>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationForm}>Inscreva-se</button>

        </div>
    )
}

export default ListTripsPage;