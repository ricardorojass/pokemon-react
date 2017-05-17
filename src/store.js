import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    console.log(state.showModal);
    return {
      ...state,
      showModal: state.showModal = true,
      pokemon: state.pokemon.concat(action.pokemon)
    };
  }
  return state;
}

export default createStore(reducer, { showModal: false, pokemon: [] });
