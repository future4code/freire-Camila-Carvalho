import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const gotToEnviarForm = () =>{
        navigate('/AppliForm')
    }

    const goBack = () =>{
        navigate('/ListTrips')
    }

    return(
        <div>
            <button onClick={gotToEnviarForm}>Enviar</button>
            <button onClick={goBack}>Voltar</button>

        </div>
    )
}

export default ApplicationFormPage;