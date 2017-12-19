// react library
import React from 'react';

// third-party library
import { render } from 'react-dom';

// component
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
}

renderApp()

if(module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  })
}
