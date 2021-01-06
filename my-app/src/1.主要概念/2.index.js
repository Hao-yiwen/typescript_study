import ReactDOM from 'react-dom';
import React from 'react';

const name='Josh Perez';
const element=<h1>hello,{name}</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
)