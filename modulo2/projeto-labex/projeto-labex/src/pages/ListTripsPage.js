import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListTripsPage = () => {
    const navigate = useNavigate() 

    const goBack = () =>{
        navigate('/')
    }

    const goToApplicationForm = () =>{
        navigate('/AppliForm')
    }

    
    return(
        <div>
            <h1>Lista de Viagens</h1>

            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationForm}>Inscreva-se</button>

        </div>
    )
}

export default ListTripsPage;