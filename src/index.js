import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <Router>
    <div>
      <App />
    </div>
  </Router>
);
