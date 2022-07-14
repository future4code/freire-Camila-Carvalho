import React from 'react';
import { useNavigate} from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate() 

    const goToListTripsPage = () => {
        navigate ('/ListTrips')
    }

    const goToLoginPage = () => {
        navigate ('/Login')
    } 

    return(
        <div>
            <h1>labeX</h1>
            <button onClick={goToListTripsPage}>Lista de Viagens</button>

            <button onClick={goToLoginPage}>Área Administrativa</button>
        </div>
    )
}

export default HomePage;