import React from 'react';
import { ThemeProvider } from '@emotion/react'
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from "./constants/theme";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>  
  </React.StrictMode>
);
