import React from "react";
import cn from "classnames";
import styles from "./Events.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Coffee Chat & Tabling",
    description: "Wednesday 8/23 - Thursday 8/31",
    color: "#23262F",
    image: "/images/content/cup.svg",
    status: "outlined",
    statusContent: "In-Person",
  },
  {
    title: "Meet The Club",
    description: "Friday 8/25, 5:00-7:00 PM",
    color: "#23262F",
    image: "/images/content/star.svg",
    status: "outlined",
    statusContent: "In-Person",
  },
  {
    title: "Women’s Mixer",
    description: "Sunday 8/27, 7:00-9:00 PM",
    color: "#23262F",
    image: "/images/content/star.svg",
    status: "outlined",
    statusContent: "Social Sciences 20",
  },
  {
    title: "Info Session 1",
    description: "Monday 8/28, 8:00-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg",
    status: "outlined",
    statusContent: "VLSB 2040",
  },
  {
    title: "Technical Workshop",
    description: "Tuesday 8/29, 8:00-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg",
    status: "outlined",
    statusContent: "VLSB 2040",
  },
  
  {
    title: "Infosession 2",
    description: "Wednesday 8/30, 8:00-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg",
    status: "outlined",
    statusContent: "VLSB 2040",
  },
  {
    title: "Application Due",
    description: "Thursday 8/31, 12:00 PM",
    color: "#23262F",
    image: "/images/content/time.svg",
    status: "outlined",
    statusContent: "Online",
  },
  {
    title: "Office Hours",
    description: "Sat 9/2 - Mon 9/4 (Interviewees Only)",
    color: "#23262F",
    image: "/images/content/info.svg",
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
