import React from 'react';
import {  Layout } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CommerceProvider } from './provider';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  return (
    <CommerceProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CommerceProvider>
  );
}

export default App;
