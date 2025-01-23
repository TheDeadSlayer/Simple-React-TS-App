// src/index.tsx

import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { loadConfig } from './config';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const renderApp = () => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

// Load configuration and then render the app
loadConfig()
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error('Failed to load configuration:', error);
    // Optionally, render an error component or message
    createRoot(rootElement).render(
      <div>
        <h1>Configuration Error</h1>
        <p>Unable to load application configuration.</p>
      </div>,
    );
  });
