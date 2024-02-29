import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/16.01.2024_project_aston">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
