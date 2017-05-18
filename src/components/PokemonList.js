import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import store from '../store';

const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";

class PokemonList extends Component {
  constructor() {
    super();

    this.state = {
      pokemonArray: []
    }

    axios.get("http://pokeapi.co/api/v2/pokemon/?offset=0")
      .then(response => {
        console.log(response.data.results);
        this.setState({
          pokemonArray: response.data.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="pokemonList">
        {this.state.pokemonArray.map(pokemon =>
          <Col md={3}>
            <div className="thumbnail" key={pokemon.url} onClick={() => this.showModal(pokemon) } >
              <img src={imgUrl + pokemon.url.slice(-2).replace('/', '') + ".png"} alt={pokemon.name} />
              <div className="caption">
                <h4>{pokemon.name}</h4>
              </div>
            </div>
          </Col>
        )}
      </div>
    );
  }

  showModal(pokemon) {
    store.dispatch({
      type: "SHOW_MODAL",
      pokemon
    });
  }
}

export default PokemonList;
