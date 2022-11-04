import React from 'react';
import {  Layout } from './components';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { CommerceProvider } from './provider';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'router';


function App() {
  const theme = createTheme();


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
