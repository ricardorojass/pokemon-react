import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <PokemonList />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
