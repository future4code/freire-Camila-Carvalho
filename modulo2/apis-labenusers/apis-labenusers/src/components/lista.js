import React from 'react';
import axios from "axios";

export default class App extends React.Component{
    state={
        listaUsuario: []
        
    }
}

  createLista = (event) => {
    const body = {
      name: this.state.inputName,
    
    };
    const request = axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "camila-carvalho-freire"
          }
        }
    );
    }