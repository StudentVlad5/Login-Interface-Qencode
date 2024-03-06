import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { App } from 'components/App/App';
import { StatusProvider } from 'components/ContextStatus/ContextStatus';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Login-Interface-Qencode">
    <GoogleOAuthProvider clientId="418198280196-vnd7t1ndfeeujklp8d0eclaqli4iipcg.apps.googleusercontent.com">
      <StatusProvider>
        <GlobalStyle />
        <App />
      </StatusProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
