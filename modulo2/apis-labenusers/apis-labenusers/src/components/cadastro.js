import React from 'react';
import axios from "axios";

export default class App extends React.Component{
    state={
        cadastro: [],
        inputName: "",
        inputEmail: ""
    }
}

onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInput = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createCadastro = (event) => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    const request = axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "camila-carvalho-freire"
          }
        }
    );
    }
    


      