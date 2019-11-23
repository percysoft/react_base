import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { renderRoutes } from 'react-router-config';
import { Routes } from '@/config/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
    <Router>
    { renderRoutes(Routes) }
    </Router>
    ,document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
