import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import rootReducer from './reducers' ;

import { MenuContext } from './context/menu-context';

const root = createRoot(document.getElementById('root') !) ;

// const store = createStore(rootReducer) ;

const MyApp = () => {
    return (
        // <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        // </Provider>
    ) ;
}

root.render(<MyApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
