import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const Clients = ({ className, headerInfo, data }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>
            {headerInfo.stage}
          </div>
          <h2 className={cn("h2", styles.title)}>{headerInfo.title}</h2>
          <div className={styles.text}>{headerInfo.desc}</div>
        </div>
        <div className={styles.wrap}>
          <h3 className={cn("h3", styles.categoryTitle)}>Platinum Partners</h3>
          <div className={styles.platinumGrid}>
            {data
              .filter((x) => x.status === "platinum")
              .map((x, index) => (
                <ScrollParallax className={styles.platinumItem} key={index}>
                  <div className={cn(styles.logo, styles.platinumLogo)}>
                    <img src={x.url} alt={x.title} />
                  </div>
                </ScrollParallax>
              ))}
          </div>
          <h3 className={cn("h3", styles.categoryTitle)}>Gold Partners</h3>
          <div className={styles.goldGrid}>
            {data
              .filter((x) => x.status === "gold")
              .map((x, index) => (
                <ScrollParallax className={styles.goldItem} key={index}>
                  <div className={cn(styles.logo, styles.goldLogo)}>
                    <img src={x.url} alt={x.title} />
                  </div>
                </ScrollParallax>
              ))}
          </div>
          <h3 className={cn("h3", styles.categoryTitle)}>Supporters</h3>
          <div className={styles.supporterGrid}>
            {data
              .filter((x) => x.status === "supporter")
              .map((x, index) => (
                <ScrollParallax className={styles.supporterItem} key={index}>
                  <div className={cn(styles.logo, styles.supporterLogo)}>
                    <img src={x.url} alt={x.title} />
                  </div>
                </ScrollParallax>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
