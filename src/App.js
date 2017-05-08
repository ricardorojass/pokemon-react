import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p> This is a simple react starter app with redux and bootstrap</p>
          <p><Button bsStyle="primary">Enjoy</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
