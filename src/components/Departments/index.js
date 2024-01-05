import React from "react";
import cn from "classnames";
import styles from "./Departments.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
  {
    title: "Consulting",
    content:
      "Blockchain at Berkeley engages in both consulting and research initiatives for industry partners looking to work with skilled intellectuals focused on blockchain. We have completed various projects across many industries and continue to improve our expertise.",
    icon: <svg
    width="33"
    height="48"
    viewBox="0 0 33 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 36V42C12.5 43.1046 13.3954 44 14.5 44H18.5C19.6046 44 20.5 43.1046 20.5 42V36H24.5V42C24.5 45.3137 21.8137 48 18.5 48H14.5C11.1863 48 8.5 45.3137 8.5 42V36H12.5Z"
      fill="#FFD166"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22.5 26.5707L23.9981 25.3697C26.7497 23.164 28.5 19.7878 28.5 16C28.5 9.37258 23.1274 4 16.5 4C9.87258 4 4.5 9.37258 4.5 16C4.5 19.7878 6.25033 23.164 9.00188 25.3697L10.5 26.5707V32C10.5 33.1046 11.3954 34 12.5 34H20.5C21.6046 34 22.5 33.1046 22.5 32V26.5707ZM26.5 28.4907V32C26.5 35.3137 23.8137 38 20.5 38H12.5C9.18629 38 6.5 35.3137 6.5 32V28.4907C2.84215 25.5585 0.5 21.0528 0.5 16C0.5 7.16344 7.66344 0 16.5 0C25.3366 0 32.5 7.16344 32.5 16C32.5 21.0528 30.1579 25.5585 26.5 28.4907Z"
      fill="#FFD166"
    />
    <path
      d="M13.9142 16.5858C13.1332 15.8047 11.8668 15.8047 11.0858 16.5858C10.3047 17.3668 10.3047 18.6332 11.0858 19.4142L14.5 22.8284V34H18.5V22.8284L21.9142 19.4142C22.6953 18.6332 22.6953 17.3668 21.9142 16.5858C21.1332 15.8047 19.8668 15.8047 19.0858 16.5858L16.5 19.1716L13.9142 16.5858Z"
      fill="#FFD166"
    />
  </svg>,
  },
  {
    title: "Education",
    content:
      "We aim to create an inclusive environment and provide a space for people of any background to grow and thrive. You can find our courses and educational content on platforms like edX, YouTube, and on campus through DeCal courses offered to UC Berkeley students.",
    icon: <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5837 4.73799C9.19009 5.31825 5.81825 8.69009 5.23799 13.0837C4.83907 16.1042 4.5 19.8825 4.5 24C4.5 28.1175 4.83907 31.8958 5.23799 34.9163C5.81825 39.3099 9.19009 42.6818 13.5837 43.262C16.6042 43.6609 20.3825 44 24.5 44C28.6175 44 32.3958 43.6609 35.4163 43.262C39.8099 42.6818 43.1818 39.3099 43.762 34.9163C44.1609 31.8958 44.5 28.1175 44.5 24C44.5 19.8825 44.1609 16.1042 43.762 13.0837C43.1818 8.69009 39.8099 5.31825 35.4163 4.73799C32.3958 4.33907 28.6175 4 24.5 4C20.3825 4 16.6042 4.33907 13.5837 4.73799ZM32.5 22C31.3954 22 30.5 21.1046 30.5 20V18H28.5C27.3954 18 26.5 17.1046 26.5 16C26.5 14.8954 27.3954 14 28.5 14H30.5V12C30.5 10.8954 31.3954 10 32.5 10C33.6046 10 34.5 10.8954 34.5 12V14H36.5C37.6046 14 38.5 14.8954 38.5 16C38.5 17.1046 37.6046 18 36.5 18H34.5V20C34.5 21.1046 33.6046 22 32.5 22ZM12.5 14C11.3954 14 10.5 14.8954 10.5 16C10.5 17.1046 11.3954 18 12.5 18H20.5C21.6046 18 22.5 17.1046 22.5 16C22.5 14.8954 21.6046 14 20.5 14H12.5ZM28.5 26C27.3954 26 26.5 26.8954 26.5 28C26.5 29.1046 27.3954 30 28.5 30H36.5C37.6046 30 38.5 29.1046 38.5 28C38.5 26.8954 37.6046 26 36.5 26H28.5ZM28.5 34C27.3954 34 26.5 34.8954 26.5 36C26.5 37.1046 27.3954 38 28.5 38H36.5C37.6046 38 38.5 37.1046 38.5 36C38.5 34.8954 37.6046 34 36.5 34H28.5ZM14.9142 27.5858C14.1332 26.8047 12.8668 26.8047 12.0858 27.5858C11.3047 28.3668 11.3047 29.6332 12.0858 30.4142L13.6716 32L12.0858 33.5858C11.3047 34.3668 11.3047 35.6332 12.0858 36.4142C12.8668 37.1953 14.1332 37.1953 14.9142 36.4142L16.5 34.8284L18.0858 36.4142C18.8668 37.1953 20.1332 37.1953 20.9142 36.4142C21.6953 35.6332 21.6953 34.3668 20.9142 33.5858L19.3284 32L20.9142 30.4142C21.6953 29.6332 21.6953 28.3668 20.9142 27.5858C20.1332 26.8047 18.8668 26.8047 18.0858 27.5858L16.5 29.1716L14.9142 27.5858Z" fill="#FECB33"/>
    </svg>
    ,
  },
  {
    title: "Research",
    content:
      "Our research team is made up of highly experienced individuals who are dedicated to using their industry expertise to push the boundaries of the space. We also have a governance team that participates in improving many top protocols by voting on community made proposals, and even making our own.",
    icon: <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 14H16.5C15.3954 14 14.5 14.8954 14.5 16V32C14.5 33.1046 15.3954 34 16.5 34H32.5C33.6046 34 34.5 33.1046 34.5 32V16C34.5 14.8954 33.6046 14 32.5 14ZM16.5 10C13.1863 10 10.5 12.6863 10.5 16V32C10.5 35.3137 13.1863 38 16.5 38H32.5C35.8137 38 38.5 35.3137 38.5 32V16C38.5 12.6863 35.8137 10 32.5 10H16.5Z" fill="#FECB33"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5 22V26H26.5V22H22.5ZM20.5 18C19.3954 18 18.5 18.8954 18.5 20V28C18.5 29.1046 19.3954 30 20.5 30H28.5C29.6046 30 30.5 29.1046 30.5 28V20C30.5 18.8954 29.6046 18 28.5 18H20.5Z" fill="#FECB33"/>
    <path d="M18.5 4C17.3954 4 16.5 4.89543 16.5 6V10H20.5V6C20.5 4.89543 19.6046 4 18.5 4Z" fill="#FECB33"/>
    <path d="M20.5 42V38H16.5V42C16.5 43.1046 17.3954 44 18.5 44C19.6046 44 20.5 43.1046 20.5 42Z" fill="#FECB33"/>
    <path d="M28.5 6C28.5 4.89543 29.3954 4 30.5 4C31.6046 4 32.5 4.89543 32.5 6V10H28.5V6Z" fill="#FECB33"/>
    <path d="M32.5 42V38H28.5V42C28.5 43.1046 29.3954 44 30.5 44C31.6046 44 32.5 43.1046 32.5 42Z" fill="#FECB33"/>
    <path d="M42.5 16C43.6046 16 44.5 16.8954 44.5 18C44.5 19.1046 43.6046 20 42.5 20H38.5V16H42.5Z" fill="#FECB33"/>
    <path d="M6.5 20H10.5V16H6.5C5.39543 16 4.5 16.8954 4.5 18C4.5 19.1046 5.39543 20 6.5 20Z" fill="#FECB33"/>
    <path d="M42.5 28C43.6046 28 44.5 28.8954 44.5 30C44.5 31.1046 43.6046 32 42.5 32H38.5V28H42.5Z" fill="#FECB33"/>
    <path d="M6.5 32H10.5V28H6.5C5.39543 28 4.5 28.8954 4.5 30C4.5 31.1046 5.39543 32 6.5 32Z" fill="#FECB33"/>
    </svg>
    ,
  },
];

const ValueProps = ({ className, scrollToRef }) => {
  return (
    <div className={cn(className, styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <div className={cn("stage-small", styles.stage)}>Departments</div>
          <div className={cn("h2", styles.title)}>
            Build. Educate. Innovate.
          </div>
          <div className={styles.text}>
          Blockchain at Berkeley drives innovation in the blockchain industry by building an ecosystem that empowers students to make an impact through practical education, consulting for enterprise companies, conducting open source research, and creating new ideas through human-centered design.
          </div>
        </div>
        {/* <div className={styles.list}>
          {items.map((x, index) => (
            <ScrollParallax className={styles.item} key={index}>
              <div
                className={styles.icon}
                // dangerouslySetInnerHTML={{ __html: x.icon }}
              >
                {x.icon}
              </div>
              <div className={styles.category}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </ScrollParallax>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ValueProps;
