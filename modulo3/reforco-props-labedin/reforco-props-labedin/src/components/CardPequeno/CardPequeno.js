import React from "react";


function CardPequeno(props) {
    return (
        <div>
            <img src={ props.imagem } />
            <p>{ props.titulo }</p>
            <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno