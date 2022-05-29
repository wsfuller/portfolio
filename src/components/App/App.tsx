import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, darkTheme, lightTheme } from '../../styles';

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggle = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        Hello World
        <button type="button" onClick={themeToggle}>
          Toggle Theme
        </button>
      </div>
    </ThemeProvider>
  );
};

export default App;
