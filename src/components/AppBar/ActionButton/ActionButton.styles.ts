import styled from 'styled-components';
import hexRgb from 'hex-rgb';

const StyledActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  height: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  color: ${({ theme }) => theme.color};
  font-size: ${({ theme }) => theme.tokens.baseUnitsToRem(4)};
  border: none;
  border-radius: ${({ theme }) => `${theme.tokens.borderRadius.small}`};
  outline: none;
  background: transparent;
  transition: ${({ theme }) => `background ${theme.tokens.transitionSpeeds.fast} ease-in-out`};

  svg {
    flex: 0 0 auto;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => hexRgb(`${theme.color}80`, { format: 'css' })};
  }

  &:focus {
    outline: none;
  }
`;

export default StyledActionButton;
