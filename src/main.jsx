import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokemonSearchApp } from './components/PokemonSearchApp';
import './components/index.css'; // Si tienes estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonSearchApp />
  </React.StrictMode>
);





