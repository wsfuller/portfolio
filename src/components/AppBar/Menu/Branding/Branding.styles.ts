import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBranding = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.tokens.baseUnitsToRem(3)};
  line-height: normal;
`;

const StyledLogo = styled.img`
  width: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  height: ${({ theme }) => theme.tokens.baseUnitsToRem(8)};
  margin-right: ${({ theme }) => theme.tokens.baseUnitsToRem(2)};
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.tokens.baseUnitsToRem(3.5)};
  white-space: nowrap;
`;

const StyledTag = styled.span`
  font-size: ${({ theme }) => theme.tokens.baseUnitsToRem(3)};
`;

export { StyledBranding, StyledLogo, StyledName, StyledTag };
