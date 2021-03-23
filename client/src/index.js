import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeSearchProvider } from './context/SearchContext';
import './styles/index.scss';

ReactDOM.render(
    <ThemeSearchProvider>
        <App />
    </ThemeSearchProvider>
    , 
    document.getElementById('root')
);

