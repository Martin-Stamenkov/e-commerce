import React from 'react';
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
      secondary: {
        main: "#0c4cc7"
      }
    },
  });

  return (
    <CommerceProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
      </ThemeProvider>
    </CommerceProvider>
  );
}

export default App;
