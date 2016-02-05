import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

var div = document.createElement('div');
div.id = 'root';
document.body.appendChild(div);
ReactDOM.render(<App />, document.getElementById('root'));