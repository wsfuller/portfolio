import React from 'react';
import { useTheme } from 'styled-components';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { useCycle } from 'framer-motion';

import AppBarProps from './AppBar.props';
import { StyledAppBar, StyledAppBarActions } from './AppBar.styles';
import ActionButton from './ActionButton';
import Menu from './Menu';
import Container from '../Container';

import logoDarkMode from '../../assets/images/logo/logo-dark-mode.svg';
import logoLightMode from '../../assets/images/logo/logo-light-mode.svg';

const AppBar: React.FC<AppBarProps> = ({ themeToggle }) => {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, cycleMenu] = useCycle(false, true);

  return (
    <Container>
      <StyledAppBar>
        <img src={isDarkMode ? logoDarkMode : logoLightMode} alt="WSF Logo" />

        <StyledAppBarActions>
          <ActionButton onClick={themeToggle}>{isDarkMode ? <FiMoon /> : <FiSun />}</ActionButton>
          <ActionButton onClick={cycleMenu}>
            <FiMenu />
          </ActionButton>
        </StyledAppBarActions>
      </StyledAppBar>
      <Menu isOpen={isMenuOpen} cycleMenu={cycleMenu} />
    </Container>
  );
};

export default AppBar;
