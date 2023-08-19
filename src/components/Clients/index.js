import React from "react";
import cn from "classnames";
import styles from "./Clients.module.sass";
import ScrollParallax from "../ScrollParallax";

const Clients = ({ headerInfo, data }) => {
  return (
    <div className={styles.clients}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage-small", styles.stage)}>{headerInfo.stage}</div>
        <div className={cn("h2", styles.title)}>{headerInfo.title}</div>
        <div className={styles.text}>
          {headerInfo.desc}
        </div>
        <div className={styles.companies}>
          {data.map((x, index) => (
            <div className={styles.logo} key={index}>
              <img src={x.url} alt={x.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
