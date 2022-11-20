import React from 'react';
import { createRoot } from 'react-dom/client';
// Store Imorts
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// Style Imports
import 'normalize.css/normalize.css'
import './styles/styles.scss';
// Router Imports
import AppRouter from './Routers/AppRouters';

//----

const store = configureStore();

//----

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(jsx);

