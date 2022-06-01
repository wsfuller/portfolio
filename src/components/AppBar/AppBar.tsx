import React from 'react';
import { useTheme } from 'styled-components';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

import AppBarProps from './AppBar.props';
import { StyledAppBar, StyledAppBarActions } from './AppBar.styles';
import logoDarkMode from '../../assets/images/logo/logo-dark-mode.svg';
import logoLightMode from '../../assets/images/logo/logo-light-mode.svg';

const AppBar: React.FC<AppBarProps> = ({ themeToggle }) => {
  const theme = useTheme();

  return (
    <StyledAppBar>
      <img src={theme.mode === 'light' ? logoDarkMode : logoLightMode} alt="WSF Logo" />

      <StyledAppBarActions>
        <button type="button" onClick={themeToggle}>
          {theme.mode === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button type="button" onClick={() => console.log('open menu')}>
          <FiMenu />
        </button>
      </StyledAppBarActions>
    </StyledAppBar>
  );
};

export default AppBar;
