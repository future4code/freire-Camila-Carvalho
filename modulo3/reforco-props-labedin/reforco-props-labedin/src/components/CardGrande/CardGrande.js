import React from 'react';
import './StyledCardGrande.js'
import styled from "styled-components";
import { BigCard } from './StyledCardGrande.js';

function CardGrande(props) {
    return (
        <BigCard>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCard>
    )
}

export default CardGrande;