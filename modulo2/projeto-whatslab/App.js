import React from "react";
import "./App.css";
import "./styles.css";

class App extends React.Component {
    state = {
       mensagem: [],
        
        valorInputUsuario: "",
        valorInputMensagem: ""
    };

    enviarMensagem = () => {
        
        const novaMensagem = {
            nome: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };

        const novaMensagens = [...this.state.mensagens, novaMensagem];
        this.setState({mensagens: novaMensagens});
        };
}

onChengeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value});
};

onChangeInputUsuario = (event) => {
this.setState({valorInputUsuario: event.target.value});
};

render() {
    const  {mensagem, valorInputMensagem, valorInputUsuario} = this.state;

    const listaPosts = (
        mensagens.map((mensagem, index) => {
            return <BalãoConversa key={index}
                nome={mensagem.nome}
                mensagem={mensagem.mensagem}
            />
        })
    



        return (
            <MainContainer>
                <div className="whats-container">
                <div className="container-mensagens">
                    {listaPosts}
                </div>
            <FormContainer onSubmit={this.enviarMensagem}>
                <input
                    value={valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder="Usuário"
                />
                <input
                    value={valorInputMensagem}
                    onChange={this.onChangeInputMensagem}
                    placeholder="Mensagem"
                />
                <button type="submit">enviar</button>
            </FormContainer>
            </div>
            </MainContainer>
        );
    );
}



export default App;




            
