import styled from 'styled-components';
import { motion } from 'framer-motion';
import hexRgb from 'hex-rgb';

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
    margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(4)};
    padding: ${({ theme }) => `0 ${theme.tokens.baseUnitsToRem(4)}`};
    background: ${({ theme }) => theme.body};
  }
`;

const StyledMenuOverlay = styled(motion.div)`
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
`;

const StyledMenuContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export { StyledMenu, StyledMenuOverlay, StyledMenuContent };
