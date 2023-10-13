import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Overview.module.sass";

const Overview = ({ className, data, scrollToRef }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          {data.tag}
        </div>
        <h2 className={cn("h1", styles.title)}>
          {data.title}
        </h2>
        <div className={styles.text}>
          {data.content}
        </div>
        {(data.button.length > 0) && 
          <Link 
            className={cn("button", styles.button)} 
            to={scrollToRef ? null : data.button[1]} 
            onClick={() => {
              if (scrollToRef) {
                scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
         {data.button[0]}
        </Link>}
        
      </div>
    </div>
  );
};

export default Overview;