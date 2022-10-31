import React from 'react';
import { Layout } from './components';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { CommerceProvider } from './provider/CommerceProvider';


function App() {
  const theme = createTheme();


  return (
    <CommerceProvider>
      <ThemeProvider theme={theme}>
        <Layout>{<></>}</Layout>
      </ThemeProvider>
    </CommerceProvider>
  );
}

export default App;
