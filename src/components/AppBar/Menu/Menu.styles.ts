import styled from 'styled-components';
import { motion } from 'framer-motion';
import hexRgb from 'hex-rgb';

import StyledAvatar from '../../Avatar/Avatar.styles';

const StyledMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.body};
  box-shadow: ${({ theme }) =>
    hexRgb(`${theme.tokens.colors.grayscale.gray100}1A`, { format: 'css' })};
  z-index: ${({ theme }) => theme.tokens.zIndex.max};
  overflow-x: hidden;
  overflow-y: auto;

  header {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    height: ${({ theme }) => theme.tokens.appBarHeight};
    margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(4)};
    padding: ${({ theme }) => `0 ${theme.utils.baseUnitsToRem(4)}`};
    background: ${({ theme }) => theme.body};
  }
`;

const StyledMenuOverlay = styled(motion.a)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }) => theme.tokens.zIndex.ten - 1};
  background: ${({ theme }) =>
    hexRgb(`${theme.tokens.colors.grayscale.gray0}80`, { format: 'css' })};
  cursor: default;
`;

const StyledMenuContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledMenuItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledMenuAvatar = styled(StyledAvatar)`
  width: ${({ theme }) => theme.utils.baseUnitsToRem(25)};
  height: ${({ theme }) => theme.utils.baseUnitsToRem(25)};
  margin: ${({ theme }) => `0 auto ${theme.utils.baseUnitsToRem(2)}`};
`;

const StyledMenuLink = styled(motion.a)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color};
  font-weight: ${({ theme }) => theme.tokens.typography.primary.weights.light};
  text-decoration: none;
  padding: 0 ${({ theme }) => theme.utils.baseUnitsToRem(4)};
  transition: background ${({ theme }) => theme.tokens.transitionSpeeds.default} ease-in-out;

  &:hover {
    background: ${({ theme }) =>
      theme.isDarkMode
        ? theme.tokens.colors.grayscale.gray200
        : theme.tokens.colors.grayscale.gray950};
  }
`;

const StyledLocation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.utils.baseUnitsToRem(4)};
  font-size: ${({ theme }) => theme.utils.baseUnitsToRem(3)};
  font-weight: ${({ theme }) => theme.tokens.typography.primary.weights.thin};
  white-space: nowrap;

  & svg {
    font-size: ${({ theme }) => theme.utils.baseUnitsToRem(3.5)};
    margin-right: ${({ theme }) => theme.utils.baseUnitsToRem(0.5)};
  }
`;

export {
  StyledMenu,
  StyledMenuOverlay,
  StyledMenuContent,
  StyledMenuItem,
  StyledMenuAvatar,
  StyledMenuLink,
  StyledLocation,
};
