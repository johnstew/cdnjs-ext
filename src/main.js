import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

injectTapEventPlugin();

const reduxDevTools = window.devToolsExtension ?
  window.devToolsExtension() : f => f;

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV === 'dev' ? reduxDevTools : f => f
  )
);

const Main = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
};

render(<Main />, document.getElementById('root'));
