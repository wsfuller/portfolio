import React from 'react';
import { useTheme } from 'styled-components';
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { DiNodejsSmall, DiReact } from 'react-icons/di';

import CarouselProps from './Carousel.props';
import StyledSwiper from './Carousel.styles';

import Card from '../Card';

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const {
    tokens: { breakpoints, baseUnit },
  } = useTheme();

  return (
    <StyledSwiper
      slidesPerView={1}
      spaceBetween={baseUnit * 5}
      breakpoints={{
        [breakpoints.small]: {
          slidesPerView: 2,
        },
        [breakpoints.large]: {
          slidesPerView: 3,
          spaceBetween: baseUnit * 8,
        },
      }}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {items?.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            icon={item.type === 'node' ? <DiNodejsSmall /> : <DiReact />}
            title={item.name}
            description={item.description}
            tools={item.tools}
            links={{
              demo: item.demoUrl,
              github: item.githubUrl,
            }}
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
export default Carousel;
