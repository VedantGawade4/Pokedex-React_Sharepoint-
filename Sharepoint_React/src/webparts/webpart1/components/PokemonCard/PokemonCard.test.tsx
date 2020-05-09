import React from 'react';
import ReactDOM from 'react-dom';
import PokemonCard from './PokemonCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PokemonCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});