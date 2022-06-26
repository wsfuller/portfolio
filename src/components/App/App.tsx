import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, darkTheme, lightTheme } from '../../styles';

import Container from '../Container';
import AppBar from '../AppBar';
import Introduction from '../Introduction';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <AppBar themeToggle={themeToggle} />
        <Introduction />
      </Container>
    </ThemeProvider>
  );
};

export default App;
