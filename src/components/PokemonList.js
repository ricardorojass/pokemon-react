import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';

const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
class PokemonList extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: []
    }

    axios.get("http://pokeapi.co/api/v2/pokemon/?offset=0")
      .then(response => {
        console.log(response.data.results);
        this.setState({
          pokemon: response.data.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="pokemonList">
        {this.state.pokemon.map(pokemon =>
          <Col md={3}>
            <div className="thumbnail" key={pokemon.url}>
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
}

export default PokemonList;
