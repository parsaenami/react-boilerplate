import React from 'react';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.scss';
import { Provider } from "react-redux";
import { store } from "./reactRedux/store";
import Test from "./components/Test";

function App() {

  return (
      <HttpsRedirect>
        <Provider store={store}>
          <BrowserRouter>
            <Helmet defaultTitle="App" titleTemplate="App | %s"/>
            <div className="App">
              <Test />
            </div>
          </BrowserRouter>
        </Provider>
      </HttpsRedirect>
  );
}

export default App;
