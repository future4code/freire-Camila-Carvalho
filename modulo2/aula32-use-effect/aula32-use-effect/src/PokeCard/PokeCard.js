import React, { useEffect, useState } from "react";
import axios from "axios";


export default function PokeCard () {
    const [nome, setNome] = useState(0)
    const [peso, setPeso] = useState("")
    const [tipo, setTipo] = useState("")



    const pegarPokemon =(id) =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151/${id}/`)
        .then((resposta) => {
            setNome(resposta.data.name)
            setPeso(resposta.data.peso)
            setTipo(resposta.data.tipo)
        }).catch((erro) =>{
            console.log(erro);
        })
    }
    
    const selecionaPokemon = (evento) =>{
        setNome(evento.target.value)
    }



    useEffect (()=>{
        pegarPokemon(nome);


    },[nome])

    return (
        <div>
            <select onchange={selecionaPokemon}></select>
        <p>Nome: {nome}</p>
        <p>Peso: {peso}</p>
        <p>Tipo: {tipo}</p>
        </div>
    )

}
/*
class PokeCard extends React.Component {
  state = {
    // valor do estado que guarda infos e foto do pokemon
    pokemon: {}
  };

  // método que roda após a montagem do componente
  componentDidMount() {
    this.pegaPokemon(this.props.pokemon);
  }

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  componentDidUpdate(prevProps) {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (prevProps.pokemon !== this.props.pokemon) {
      this.pegaPokemon(this.props.pokemon);
    }
  }

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const pokemon = this.state.pokemon;

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }
}


