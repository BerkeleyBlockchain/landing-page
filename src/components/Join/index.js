import React from "react";
import cn from "classnames";
import styles from "./Join.module.sass";
import Image from "../Image";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <Image
            srcSet="/images/content/asset-blockchain@2x.png 2x"
            srcSetDark="/images/content/asset-blockchain@2x.png 2x"
            src="/images/content/asset-blockchain.png"
            srcDark="/images/content/asset-blockchain.png"
            alt="Blockchain"
          />
        </div>
        <div className={cn("stage-small", styles.stage)}>Spring 2024</div>
        <h2 className={cn("h2", styles.title)}>Create & Build Tomorrow, Today</h2>
        <div className={styles.text}>
        Our vision is to build tomorrow's technology, today. We educate and empower the next generation of Blockchain users and developers. Our members are encouraged to experiment with new ideas and build powerful tools that push the technology's limits. ‍We are actively recruiting for developers and designers who are dedicated toward the adoption and growth of Blockchain technologies.
        </div>
        <div className={styles.flex}>
          <Link className={cn("button", styles.button)} to={"https://tinyurl.com/sp24bab"} target="_blank">
            Apply Now
          </Link>
          <Link
            className={cn("button-stroke", styles.button)}
            to={"https://tinyurl.com/sp24-chats"} target="_blank"
          >
            Coffee Chat Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
