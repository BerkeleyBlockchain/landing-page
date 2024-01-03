// src/screens/Design/Initiatives/index.js
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Initiatives.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Initatives = React.forwardRef(({ className, items, title, description }, ref) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn(className, styles.section)} ref={ref}>
      <div className={cn("section-pb", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.head}>
            <h2 className={cn("h2", styles.title)}>{title}</h2>
            <div className={styles.info}>
              {description} {" "}
            </div>
          </div>
          <div className={styles.wrap}>
            <Slider
            className={cn("lifestyle-slider", styles.slider)}
              {...settings}
            >
              {items.map((x, index) => (
                <ScrollParallax className={styles.item} key={index}>
                  <div className={styles.row}>
                    <div className={styles.col}>
                      <div className={styles.details}>
                        <div className={styles.number}>0{index + 1}.</div>
                        <div className={styles.category}>{x.title}</div>
                        <div className={styles.content}>{x.content}</div>
                        <div className={styles.detailButton}>
                        {x.url && (
                          <Link to={x.url} className={cn("button-small", styles.button)}>
                            Explore
                          </Link>
                        )}
                        </div>
                        
                      </div>
                    </div>
                    <div className={styles.col}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt={x.title}
                      />
                    </div>
                  </div>
                </ScrollParallax>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  );
});

export default Initatives;

