import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.scss';

function App() {
  return (

      <HttpsRedirect>
        <BrowserRouter>
          <Helmet defaultTitle="App" titleTemplate="App | %s"/>
          <div className="App">
            What a nice ReactJS boilerplate by Parsa!
          </div>
        </BrowserRouter>
      </HttpsRedirect>
  );
}

export default App;
