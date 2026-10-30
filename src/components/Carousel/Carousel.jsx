import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import styles from './Carousel.module.css';

import 'swiper/css';

export default function Carousel({ data, renderComponent }) {
  const swiperRef = React.useRef(null);

  return (
    <div className={styles.carousel}>
      <Swiper
        className={styles.swiper}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        slidesPerView="auto"
        spaceBetween={32}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        aria-label="Previous cards"
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${styles.arrowButton} ${styles.previous}`}
      >
        <KeyboardArrowLeftIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="Next cards"
        onClick={() => swiperRef.current?.slideNext()}
        className={`${styles.arrowButton} ${styles.next}`}
      >
        <KeyboardArrowRightIcon fontSize="large" />
      </IconButton>
    </div>
  );
}