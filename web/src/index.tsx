import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


ReactDOM.render(// Metódo Render, ele procura o elemento com id 'root'
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
