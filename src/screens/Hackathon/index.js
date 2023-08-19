import React, { useRef } from "react";
import cn from "classnames";
import styles from "./Hackathon.module.sass";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
import CountdownTimer from "../../components/Countdown";

const Hackathon = () => {
  const scrollToRef = useRef(null);
  const intro = {
    tag: "Hackathon",
    title: "Work with us.",
    content: (
      <div>
        Blockchain at Berkeley engages in both consulting and research
        initiatives for industry partners looking to work with skilled
        intellectuals focused on blockchain. We have completed various projects
        across many industries and continue to improve our expertise.
      </div>
    ),
    button: ["Contact us", "https://apple.com"],
  };
  const targetDate = "2023-11-03 12:00:00";

  return (
    <div className={cn("section-pb", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.preview}>
          <Image
            srcSet="/images/content/mining@2x.png 2x"
            srcSetDark="/images/content/mining@2x.png 2x"
            src="/images/content/mining.png"
            srcDark="/images/content/mining.png"
            alt="Blockchain"
          />
        </div>
        <div className={cn("stage-small", styles.stage)}>Fall 2023</div>
        <h2 className={cn("h2", styles.title)}>Blockchain at Berkeley Hacks</h2>
        <div className={styles.text}>November 3-4, 2023 | Berkeley, CA</div>
        <div className={styles.timer}>
          <CountdownTimer targetDate={targetDate} />
        </div>

        <Link className={cn("button-stroke", styles.button)} to={""}>
          More Information Available Soon
        </Link>
      </div>
    </div>
  );
};

export default Hackathon;
