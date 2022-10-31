import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux'
import "./i18next";
import i18next from 'i18next'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));

const loadingMarkup = (
  <div
    className=""
    style={{
      textAlign: 'center',
      padding: '2px'
    }}>
    <h3>Loading..</h3>
  </div>
)


root.render(
  <Suspense fallback={loadingMarkup}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,

);


reportWebVitals();
