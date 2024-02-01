import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Section.module.sass";
import ScrollParallax from "../ScrollParallax";

const Section = React.forwardRef(({ data, imageOnLeft, isButtonSpecial = false }, ref) => {
  const sectionClass = cn(styles.section, {
    [styles.imageOnLeft]: imageOnLeft,
    [styles.imageOnRight]: !imageOnLeft,
  });

  const buttonClass = isButtonSpecial ? cn("button-stroke-special", styles.button) : cn("button", styles.button);

  return (
    <div className={sectionClass} ref={ref}>
      <div className={cn("container", styles.container)}>
        <div className={styles.gallery}>

          <img
            srcSet={`/images/content/${data.asset}@2x.png 2x`}
            src={`/images/content/${data.asset}.png`}
            alt="Rocket"
          />
        </div>
        <div className={cn(styles.wrap, {
          [styles.imageOnLeft]: imageOnLeft,
          [styles.imageOnRight]: !imageOnLeft,
        })}>
          <h2 className={cn("h1", styles.title)}>{data.title}</h2>
          <div className={styles.text}>{data.desc}</div>
          {(data.buttons.length > 0) && <Link
            className={buttonClass}
            to={data.buttons[0][1]}
            target="_blank"
          >
            {data.buttons[0][0]}
          </Link>}

        </div>
      </div>
    </div>
  );
});

export default Section;
