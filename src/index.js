import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeState from './context/ThemeState';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ThemeState>
    <App />
    </ThemeState>);
    
