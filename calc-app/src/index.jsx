import React from 'react';
import { createRoot } from 'react-dom/client';  // Aquí cambiamos la importación
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);  // Usamos createRoot en lugar de ReactDOM.render

reactRoot.render(<App />);
