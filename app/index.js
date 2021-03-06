import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

//All css bundle
//import 'font-awesome/css/font-awesome.css';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'theme/bootstrap/dist/css/bootstrap.css';
import 'theme/react-metismenu/react-metismenu-standart.css';

import 'theme/sb-admin-2.css';
//import 'theme/metismenu.scss';
import 'theme/font-awesome/css/font-awesome.css';
import 'theme/main.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'containers/App';
import store from 'store';



const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/App', () => renderApp(App));
}
