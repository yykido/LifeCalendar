import React from 'react';
import logo from './logo.svg';
import './App.css';
import DoB from './components/DoB';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh" // Full viewport height
            bgcolor="#f0f0f0" // Optional background color
        >
          <DoB />

        </Box>
    </div>
  );
}

export default App;
