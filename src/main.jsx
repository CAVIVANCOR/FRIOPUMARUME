// index.css o App.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '@fontsource/catamaran/300.css'; // Importar el peso 300 de Catamaran
import '@fontsource/catamaran/400.css'; // Importar el peso 400 de Catamaran
import '@fontsource/catamaran/500.css'; // Importar el peso 500 de Catamaran
import '@fontsource/catamaran/700.css'; // Importar el peso 700 de Catamaran
import 'dayjs/locale/en-gb';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
              <App />
            </LocalizationProvider>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
  </ThemeProvider>
);

