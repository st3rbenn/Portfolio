import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize'
import GlobalFonts from "./fonts/fonts";

ReactDOM.render(
    <React.StrictMode>
        <GlobalFonts />
        <Normalize />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

