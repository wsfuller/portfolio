import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSwiper = styled(Swiper)`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: ${({ theme }) =>
    `${theme.utils.baseUnitsToRem(3)} ${theme.utils.baseUnitsToRem(2)} ${theme.utils.baseUnitsToRem(
      8
    )}`};

  .swiper-wrapper {
    min-height: 250px;
  }

  .swiper-pagination {
    z-index: ${({ theme }) => theme.tokens.zIndex.nine};
  }

  .swiper-pagination-bullet {
    ${({ theme }) => theme.isDarkMode && `background: ${theme.color} `};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.tokens.colors.branding.primary0};
  }
`;

export default StyledSwiper;
