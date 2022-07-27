import React from "react";
import {LittleCard} from "./StyleCardPequeno";



function CardPequeno(props) {
    return (
        <LittleCard>
            <img src={ props.imagem } />
            <strong>{ props.titulo }</strong>
            <p>{ props.dado }</p>
        </LittleCard>

        
    )
}

export default CardPequeno