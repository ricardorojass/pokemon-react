import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <div className="container">
          <h1>Pokemon API</h1>
          <p>This is a simple react using React</p>
          <p><Button bsStyle="primary">Enjoy</Button></p>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;
