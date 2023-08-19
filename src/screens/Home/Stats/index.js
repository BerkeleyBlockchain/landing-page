import React from "react";
import cn from "classnames";
import styles from "./Stats.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const Stats = ({items}) => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div className={styles.preview}>
                <img src={x.images} alt={x.alt} />
              </div>
              <div className={styles.counter}>{x.counter}</div>
              <div className={styles.title}>{x.title}</div>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
