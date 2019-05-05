import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import configureStore from './store/configureStore';
import palette from './constants/palette';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
    overflow-y: scroll;
    background: ${palette.gray1};
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes growY {
    from { transform: scaleY(0) }
    to   { transform: scaleY(1) }
  }
`;

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

render(
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);
