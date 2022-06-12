import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, darkTheme, lightTheme } from '../../styles';
import AppBar from '../AppBar';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeToggle = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppBar themeToggle={themeToggle} />
    </ThemeProvider>
  );
};

export default App;
