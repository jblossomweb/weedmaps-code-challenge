import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import HomePage from './pages/home_page';
import AppHeader from './components/app_header';

import { GlobalStyle } from './styles';

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <AppHeader />
        <Switch>
          <Route exact={true} key={'home'} path={'/home'} component={HomePage} />
          <Redirect to={`/home`} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);
