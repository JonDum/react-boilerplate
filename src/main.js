import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import 'styles/core';

import App from 'app'

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.querySelector('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
