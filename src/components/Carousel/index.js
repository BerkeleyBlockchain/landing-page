import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Carousel.module.sass";
import Slider from "react-slick";
import Icon from "../Icon";
import CarouselItem from "./CarouselItem";



const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Carousel = ({items, classNameTitle, title, classNameSection, scrollToRef }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={cn(classNameSection, styles.section)}>
      <div className={styles.anchor} ref={scrollToRef}></div>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <Slider className="programs-slider" {...settings}>
            {items.map((x, index) => (
              <CarouselItem content={x} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
