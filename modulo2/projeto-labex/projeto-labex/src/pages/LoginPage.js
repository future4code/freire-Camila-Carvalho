import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()

    const goBack = () =>{
        navigate('/')
    }

    const goOn = () =>{
        navigate('/AdminHome')
    }

    return(
        <div>
            <h1>Login</h1>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goOn}>Entrar</button>

        </div>
    )
}

export default LoginPage;