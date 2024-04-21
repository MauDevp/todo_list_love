import React from 'react';
// import ReactDOM from 'react-dom/';
import {render} from 'react-dom'
import './index.css';
import App from './App';

// const root = ReactDOM.createPortal(document.getElementById('root'));
// root.render(<App />);

const root = document.getElementById('root');
render(<App />, root);
