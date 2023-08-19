import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>
                        Blockchain at Berkeley
                    </div>
                    <h1 className={cn("h1", styles.title)}>
                        Berkeley's Hub for Blockchain Innovation.
                    </h1>
                    <div className={styles.text}>
                    We're a student-run organization at UC Berkeley focused on 
                    blockchain innovation via education, research, and consulting.
                    </div>
                    <div className={styles.btns}>
                        <Link
                            className={cn("button", styles.button)}
                            to="/apply"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
                <ScrollButton
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/asset-blockchain@2x.png 2x"
                            srcSetDark="/images/content/asset-blockchain@2x.png 2x"
                            src="/images/content/asset-blockcahain.png"
                            srcDark="/images/content/asset-blockchain.png"
                            alt="Blockchain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
