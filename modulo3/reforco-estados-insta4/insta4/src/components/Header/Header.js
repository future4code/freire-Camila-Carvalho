import React from 'react';
import styled from 'styled-components';







const DivHeader = styled.div`
    background-image: linear-gradient(to bottom right, indigo, violet, #e31996, red, orange ,yellow);
    padding: 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 20vh;
    width: 40%;
    




    h1{
        
        font-family: 'Mochiy Pop One', sans-serif;
        
        font-weight: 400;
        font-style: normal;
        font-size: 50px;
	    font-weight: bolder;
	    width: 400px;
	    color:#e0c8d7;
	    margin: 80px 200px;
        
    }


`


export default function Header ()  {
    return(

        <DivHeader>
            <h1>Insta4</h1>

            
        </DivHeader>

    )

}

