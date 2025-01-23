import React from "react";
import cn from "classnames";
import styles from "./Events.module.sass";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
  {
    title: "Coffee Chats",
    description: "Tue 1/21 - Thu 1/30",
    color: "#23262F",
    image: "/images/content/cup.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "In-Person",
    link: "https://fluff-mole-50d.notion.site/Coffee-Chats-16ff36646ccb80e09965e8fb5c61a576",
  },
  {
    title: "Member Mixer",
    description: "Fri 1/24, 7:00 PM-9:00 PM",
    color: "#23262F",
    image: "/images/content/user-yellow.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "The Standard",
  },
  {
    title: "Clubs & Cookies",
    description: "TBA",
    color: "#23262F",
    image: "/images/content/star.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "TBA",
  },
  {
    title: "Women’s Mixer",
    description: "Mon 1/27, 5:00 PM-7:00 PM",
    color: "#23262F",
    image: "/images/content/globe.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "The Standard",
  },
  {
    title: "Design Fair",
    description: "Fri 1/24, 6:00 PM-8:00 PM",
    color: "#23262F",
    image: "/images/content/mouse-yello.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Jacobs 310",
  },
  {
    title: "Info Session",
    description: "Tue 1/28, 8:00 PM-10:00 PM",
    color: "#23262F",
    image: "/images/content/info.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Haas N100",
  },
  {
    title: "Application Due",
    description: "Thu 1/30, 11:59 AM (Noon)",
    color: "#23262F",
    image: "/images/content/time.svg", // Assuming the image is the same
    status: "outlined",
    statusContent: "Online",
  },
  {
    title: "Resume Acceptances Sent",
    description: "Fri 1/31",
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
              {x.title === "Coffee Chats" ? ( //new
                <a
                  href={x.link} //new
                  target="_blank" //new
                  rel="noopener noreferrer" //new
                  className={styles.link} // Apply any necessary styles here //new
                >
                  <div
                    className={styles.preview}
                    style={{ backgroundColor: x.color }}
                  >
                    <img src={x.image} alt="Logo" />
                  </div>
                </a>
              ) : ( //new
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
                  {x.title === "Coffee Chats" ? ( //new
                    <a
                      href={x.link} //new
                      target="_blank" //new
                      rel="noopener noreferrer" //new
                      className={styles.subtitle} // Keeps the subtitle class to inherit styling //new
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
