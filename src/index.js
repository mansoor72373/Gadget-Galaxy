import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoritesProvider } from './context/FavoritesContext';
import './index.css'; // Import your CSS file if needed

ReactDOM.render( <
    React.StrictMode >
    <
    FavoritesProvider >
    <
    App / >
    <
    /FavoritesProvider> <
    /React.StrictMode>,
    document.getElementById('root')
);