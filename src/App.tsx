import React from 'react';
import Homepage from './pages/Homepage';
import ResetStyles from './reset.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ResetStyles />
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
