import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./carousel.module.css";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import HandleFavorite from "../HandleFavorite/HandleFavorite";

const Carousel = ({ items }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className={styles.swiper}>
          {items.favorites.map((item) => (
            <SwiperSlide>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={styles.swiperSlide}
              >
                <h4>{item.title}</h4>
                <p style={{ color: "blue" }}>{item.price}$</p>
                <div className={styles.favorite}>
                  <HandleFavorite product={item} />
                </div>
              </div>
              <h3 className={styles.swiperP}>{item.description}</h3>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
