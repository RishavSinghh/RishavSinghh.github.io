/**
 * @file main.tsx
 * @description Application bootstrap configuration and DOM injection point.
 * // SEARCH_TAGS: Root, Main, Entry, Render, DOM
 * // MAINTAINABILITY: This file rarely needs modification unless wrapping the app with new high-level providers (e.g. Redux, React Query, Auth).
 */
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
