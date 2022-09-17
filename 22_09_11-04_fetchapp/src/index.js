import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GifExpertApp } from './GifExpertApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp/> {/* Solamente el componente a Renderizar, es el Papa */}
  </React.StrictMode>
);