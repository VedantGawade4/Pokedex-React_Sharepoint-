import React from 'react';
import ReactDOM from 'react-dom';
import EditBoard from './EditBoard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});