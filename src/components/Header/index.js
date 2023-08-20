import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import Image from "../Image";

const navLinks = [
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
    url: "https://www.facebook.com/ui8.net/",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/ui8net/",
  },
];

const contact = [
  {
    title: "Montanachester",
    content: "06787 Block Estates",
  },
  {
    title: "Lake Gene",
    content: "167 Emard River",
  },
  {
    title: "North Hassiefort",
    content: "032 Leonora Spurs",
  },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.pic}
            src="/images/logo-light.png"
            srcDark="/images/logo-light.png"
            alt="Blockchain at Berkeley"
          />
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {navLinks.map((x, index) =>
              (
                <NavLink
                  className={cn(styles.link, {
                    [styles.active]: pathname === x.url,
                  })}
                  to={x.url}
                  key={index}
                  target={index === 5 ? "_blank" : undefined}
                  rel={index === 5 ? "noopener noreferrer" : undefined}
                  onClick={() => setVisibleNav(false)}
                >
                  {x.title}
                </NavLink>
              )
            )}
          </nav>
          <div className={styles.details}>
            <Link
              className={cn("button button-small", styles.button)}
              to="/apply"
              onClick={() => setVisibleNav(false)}
            >
              Apply
            </Link>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="/contact"
              onClick={() => setVisibleNav(false)}
            >
              Contact
            </Link>
          </div>
        </div>
        <Link
          className={cn("button-stroke button-small", styles.button)}
          to="/contact"
        >
          Contact
        </Link>
        <Link className={cn("button button-small", styles.button)} to="/apply">
          Apply
        </Link>
        <button
          className={cn(styles.burger, {
            [styles.active]: visibleNav,
          })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default Headers;
