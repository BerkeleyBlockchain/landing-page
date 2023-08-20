import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Hackathon",
        url: "/hackathon",
    },
    {
        title: "Grants",
        url: "/grants",
    },
    {
        title: "Business",
        url: "/business",
    },
    {
        title: "Research",
        url: "/research",
    },
    {
        title: "Blog",
        url: "https://calblockchain.mirror.xyz",
    },
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: "https://www.facebook.com/BlockchainatBerkeley/",
    },
    {
        title: "twitter",
        size: "18",
        url: "https://twitter.com/CalBlockchain",
    },
    {
        title: "instagram",
        size: "16",
        url: "https://www.instagram.com/calblockchain/",
    },
    {
        title: "linkedin",
        size: "16",
        url: "https://www.linkedin.com/company/blockchain-at-berkeley/",
    },
];

const Footer = () => {
    const [visible, setVisible] = useState(false);

    const { pathname } = useLocation();

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.col}>
                        <div className={styles.box}>
                            <Link className={styles.logo} to="/">
                                <Image
                                    className={styles.pic}
                                    src="/images/logo-light.png"
                                    srcDark="/images/logo-light.png"
                                    alt="Blockcahin at Berkeely"
                                />
                            </Link>
                            {/* <Theme className={styles.theme} /> */}
                        </div>
                        <div
                            className={cn(styles.item, {
                                [styles.active]: visible,
                            })}
                        >
                            <div
                                className={styles.category}
                                onClick={() => setVisible(!visible)}
                            >
                                footer nav
                                <Icon name="arrow-bottom" size="9" />
                            </div>
                            <div className={styles.menu}>
                                {menu.map((x, index) => (
                                    <NavLink
                                        className={cn(styles.link, {
                                            [styles.active]: pathname === x.url,
                                        })}
                                        target={index === 5 ? "_blank" : undefined}
                                        rel={index === 5 ? "noopener noreferrer" : undefined}
                                        to={x.url}
                                        key={index}
                                    >
                                        {x.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.category}>contact</div>
                        <div className={styles.info}>
                            <p><a href="mailto:admin@blockchain.berkeley.edu">admin@blockchain.berkeley.edu</a></p>
                            <p>University of California, Berkeley</p>
                            <p>Berkeley, CA</p>
                        </div>
                    </div>
                    {/* <div className={styles.col}>
                        <div className={styles.category}>newsletter</div>
                        <div className={styles.info}>
                            Subscribe our newsletter to get more free design
                            course and resource.
                        </div>
                        <Subscription
                            className={styles.subscription}
                            placeholder="Enter your email"
                        />
                    </div> */}
                </div>
            </div>
            <div className={styles.foot}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.copyright}>
                        Copyright © 2023 Blockchain at Berkeley. All rights reserved
                    </div>
                    <div className={styles.socials}>
                        {socials.map((x, index) => (
                            <a
                                className={styles.social}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <Icon name={x.title} size={x.size} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
