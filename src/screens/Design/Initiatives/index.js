// src/screens/Design/Initiatives/index.js
import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./Initiatives.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "UX Research + Prototyping",
    image: "/images/content/design-pic-1.png",
    image2x: "/images/content/design-pic-1@2x.png",
    content:
      "Each semester, we embark on a journey to unravel a key question in the realm of blockchain, guiding our path from research and ideation to prototyping.",
  },
  {
    title: "Quickly find the class you want",
    image: "/images/content/design-pic-2.png",
    image2x: "/images/content/design-pic-2@2x.png",
    content:
      "We craft high-fidelity prototypes for our consulting clients, fostering a culture of mutual enhancement where valuable feedback refines and elevates our collective design expertise.",
  },
  {
    title: "Brand Design + Marketing",
    image: "/images/content/design-pic-3.png",
    image2x: "/images/content/design-pic-3@2x.png",
    content:
      "We meticulously shape the brand identity of our organization and design comprehensive marketing materials. Our brand is a reflection of our commitment to innovation turning great ideas into great designs.",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Initatives = React.forwardRef(({ className }, ref) => {
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
            <h2 className={cn("h2", styles.title)}>Our Initiatives</h2>
            <div className={styles.info}>
              We are the team that curates the brand of our organization, deliver high-fidelity prototypes for consulting projects, and spearhead UX research initiatives.  {" "}
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
                      </div>
                    </div>
                    <div className={styles.col}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Lifestyle"
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

