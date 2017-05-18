import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import store from '../store';

class PokemonModal extends Component {
  constructor(){
    super();

    this.state = {
      showModal: false,
      pokemon: []
    };

    store.subscribe(() => {
      // console.log(store.getState());
      this.setState({
        showModal: store.getState().showModal,
        pokemon: store.getState().pokemon
      });
    });

    this.close = this.close.bind(this);
  }

  open() {
    this.setState({
      showModal: true
    });
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return(
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PokemonModal;
