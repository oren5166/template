import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import ContextProvider from './context/contextProvider';

ReactDOM.render(
  <ContextProvider>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </ContextProvider>, document.getElementById('root'));
