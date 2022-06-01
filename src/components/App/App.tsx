import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, darkTheme, lightTheme } from '../../styles';

import AppBar from '../AppBar';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggle = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppBar themeToggle={themeToggle} />
    </ThemeProvider>
  );
};

export default App;
