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
        <h2 className={cn("h2", styles.title)}>Membership Application</h2>
        <div className={styles.text}>
          Blockchain at Berkeley is a student-led Blockchain group focused on
          learning, educating, designing and overall contributing to the
          community. We are interested in working with anyone who is dedicated
          toward the adoption and growth of Blockchain technologies. ‍We are
          actively recruiting for our research, design, development, business,
          and education programs.
        </div>
        <div className={styles.flex}>
          <Link className={cn("button-indicator", styles.button)} to={""}>
            Application Available Soon
          </Link>
          {/* <Link
            className={cn("button-stroke", styles.button)}
            to={""}
          >
            Coffee Chat Opening Soon
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Join;
