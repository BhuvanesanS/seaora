import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SeaoraPages from './SeaoraPages';
import './seaora-pages.css';
import './logo-overrides.css';
import './motion-layer.css';
import './design-refinement.css';
import './premium-rebuild.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeaoraPages />
  </StrictMode>,
);
