import React from "react";
import cn from "classnames";
import styles from "./Events.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Coffee Chats",
    description: "Tue 1/20 - Thu 1/29",
    color: "#23262F",
    image: "/images/content/cup.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "In-Person",
    link: "https://blockchain-at-berkeley.notion.site/SP26-Coffee-Chat-2e8bd5913d0080ea9bd8e26a1d5228c5?pvs=143",
  },
  {
    title: "Member Mixer",
    description: "Thurs 1/22, 5:00 PM-7:00 PM",
    color: "#23262F",
    image: "/images/content/star.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "The Standard Courtyard (2nd Floor)",
  },
  {
    title: "Women’s Mixer",
    description: "Sat 1/24, 4:00 PM-6:00 PM",
    color: "#23262F",
    image: "/images/content/globe.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "The Standard Lounge",
  },
  {
    title: "Cross-Club DEI Mixer",
    description: "Mon 1/27, 5:00 PM-7:00 PM",
    color: "#23262F",
    image: "/images/content/user-yellow.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "The Standard Courtyard (2nd Floor)",
  },
  {
    title: "Clubs & Cookies",
    description: "Mon 1/26, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/user-yellow.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "TBA",
  },
  // {
  //   title: "Clubs & Cookies",
  //   description: "TBA",
  //   color: "#23262F",
  //   image: "/images/content/star.svg", // Assuming the image is the same
  //   status: "outlined",
  //   statusContent: "TBA",
  // },
  // {
  //   title: "Women’s Mixer",
  //   description: "Sat 1/24, 4:00 PM-6:00 PM",
  //   color: "#23262F",
  //   image: "/images/content/globe.svg", // Assuming the image is the same
  //   status: "outlined",
  //   statusContent: "The Standard",
  // },
  {
    title: "Info Session",
    description: "Tue 1/27, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Dwinelle 247",
  },
  {
    title: "Technical Workshop",
    description: "Wed 1/28, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/mouse-yello.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Dwinelle 263",
  },
  // {
  //   title: "Design Fair",
  //   description: "Fri 1/24, 6:00 PM-8:00 PM",
  //   color: "#23262F",
  //   image: "/images/content/mouse-yello.svg", // Assuming the image is the same
  //   status: "outlined",
  //   statusContent: "Jacobs 310",
  // },
  // {
  //   title: "Member Mixer",
  //   description: "Tue 9/2, 7:00 PM-9:00 PM",
  //   color: "#23262F",
  //   image: "/images/content/info.svg", // Assuming the image is the same
  //   status: "outlined",
  //   statusContent: "The Standard Courtyard (2nd Floor)",
  // },
  {
    title: "Application Due",
    description: "Thu 1/29, 12:00 PM PST",
    color: "#23262F",
    image: "/images/content/time.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Online",
    link: "https://noteforms.com/forms/blockchain-at-berkeley-sp26-application-tcb52t",
  },
  // {
  //   title: "Resume Acceptances Sent",
  //   description: "Fri 1/31",
  //   color: "#23262F",
  //   image: "/images/content/time.svg", // Assuming the image is the same
  //   status: "outlined",
  //   statusContent: "Online",
  // },
];

const Events = () => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h2 className={cn("h2", styles.title)}>Recruitment Timeline</h2>
        <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              {x.link ? (
                <a
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <div
                    className={styles.preview}
                    style={{ backgroundColor: x.color }}
                  >
                    <img src={x.image} alt="Logo" />
                  </div>
                </a>
              ) : (
                <div
                  className={styles.preview}
                  style={{ backgroundColor: x.color }}
                >
                  <img src={x.image} alt="Logo" />
                </div>
              )}
              <div className={styles.details}>
                {x.status && (
                  <div
                    className={cn(
                      { "status-stroke-yellow": x.status === "outlined" },
                      styles.status
                    )}
                  >
                    {x.statusContent}
                  </div>
                )}

                <div className={styles.subtitle}>
                  {x.link ? (
                    <a
                      href={x.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.subtitle}
                    >
                      {x.title}
                    </a>
                  ) : (
                    <span>{x.title}</span>
                  )}
                </div>

                <div className={styles.description}>{x.description}</div>
              </div>
            </ScrollParallax>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
