import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { App } from 'components/App/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Login-Interface-Qencode">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
