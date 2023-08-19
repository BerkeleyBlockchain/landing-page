import React from "react";
import cn from "classnames";
import styles from "./CarouselItem.module.sass";

const CarouselItem = ({ content }) => {
  return (
    <div className={cn("carousel-item", styles.item)}>
      <div className={styles.icon} style={{ backgroundColor: content.color }}>
        <img src={content.image} alt={content.alt} />
      </div>
      <div className={styles.subtitle}>{content.title}</div>
      <div className={styles.content}>{content.content}</div>
      {"subtitle" in content && content.subtitle}
    </div>
  );
};

export default CarouselItem;
