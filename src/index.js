import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// CREATING LOGIN FEATURE FOR THE APP
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-s33rs6z5.us.auth0.com"
        clientId="Ps2YEAPtH6hRrJmkwRz2WwwFrTXjKsUq"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </BrowserRouter>
);
