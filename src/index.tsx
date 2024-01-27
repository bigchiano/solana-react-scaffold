import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './output.css';
import App from './App';
import Providers from './Providers';

ReactDOM.render(
  <React.StrictMode>
    <Providers children={<App />} />
  </React.StrictMode>,
  document.getElementById('root')
);
