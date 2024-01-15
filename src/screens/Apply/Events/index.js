import React from "react";
import cn from "classnames";
import styles from "./Events.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Coffee Chats",
    description: "Tue 1/16 - Wed 1/24",
    color: "#23262F",
    image: "/images/content/cup.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "In-Person",
  },
  {
    title: "Info Session 1",
    description: "Thu 1/18, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "VLSB 2040",
  },
  {
    title: "Design Fair",
    description: "Fri 1/19, 12:00 PM-4:00 PM",
    color: "#23262F",
    image: "/images/content/star.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Jacobs 310",
  },
  {
    title: "Women’s Mixer",
    description: "Fri 1/19, 5:00 PM-7:00 PM",
    color: "#23262F",
    image: "/images/content/star.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Haas Courtyard",
  },
  {
    title: "Technical Workshop",
    description: "Sun 1/21, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "SOCS 20",
  },
  {
    title: "Clubs & Cookies",
    description: "Mon 1/22, 8:00 PM-9:30 PM",
    color: "#23262F",
    image: "/images/content/star.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "VLSB 2050",
  },
  {
    title: "Info Session 2",
    description: "Tue 1/23, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Location TBD",
  },
  {
    title: "Application Due",
    description: "Thu 1/25, 11:59 PM",
    color: "#23262F",
    image: "/images/content/time.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Online",
  },
];

const Events = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Recruitment Timeline</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.preview}
                style={{ backgroundColor: x.color }}
              >
                <img src={x.image} alt="Logo" />
              </div>
              <div className={styles.details}>
                {x.status && (
                  // <div className={cn(x.status, styles.status)}>{x.statusContent}</div>
                  <div
                    className={cn(
                      { "status-stroke-yellow": x.status === "outlined" },
                      styles.status
                    )}
                  >
                    {x.statusContent}
                  </div>
                )}
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.description}>{x.description}</div>
                {/* <a
                  href="/#"
                  className={cn("button-small", styles.button)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Download</span>
                  <Icon name="arrow-down" size="10" />
                </a> */}
              </div>
            </ScrollParallax>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Events;
