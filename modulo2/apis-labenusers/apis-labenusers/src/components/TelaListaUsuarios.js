import React, { useReducer } from 'react';
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  justify-content: space-between;
  display: flex;
`

export default class TelaListaUsuarios extends React.Component{
  state = {
    usuarios: []
  }

    conponentDidMount() {
      this.pegarUsuarios()
    }

  pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "Camila-Carvalho-Freire"
      }
    })
      .then((resposta) => {
        this.setState({usuarios: resposta.data})

    })
      .catch((erro) => {
        alert("Ocorreu um problema, tente novamente")
    }) 

  }

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, { 
      headers: {
        Authorization: "Camila-Carvalho-Freire"
      }
    })
    .then((resposta)=>{
      alert("Usuário deletado com sucesso")
      this.pegarUsuarios()

    })

    .catch((erro) =>{
      alert("Ocorreu um erro, tente novamente")

    })

  }

    render(){
      const listaUsuarios = this.state.usuarios.map((user)=> {
        return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>X</button>
          </CardUsuario>
        )
      })
        return(
          <div>
            <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            <h2> Lista de Usuários</h2>
          </div>
        )  
    }
}