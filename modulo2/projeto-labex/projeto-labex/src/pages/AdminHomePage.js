import React from 'react'
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h1>Painel Administrativa</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToCreateTripPage} >Criar Viagem</button>
            <button onClick={goToLogin}>Logout</button>

        </div>
    )
}

export default AdminHomePage;