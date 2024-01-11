import React, { useRef } from "react";
import Overview from "../../components/Overview";
import Carousel from "../../components/Carousel";
import styles from "./Contact.module.sass";
import CarouselItem from "../../components/Carousel/CarouselItem";

const Contact = () => {
  const scrollToRef = useRef(null);

  const intro = {
    tag: "Contact",
    title: "Get in Touch.",
    content: "",
    button: [],
  };

  const info = [
    {
      title: "Consulting",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:education@blockchain.berkeley.edu">
          consulting@blockchain.berkeley.edu
        </a>
      ),
      content:
        "For any inquiries regarding our consulting services for your company or questions regarding our consulting department.",
    },
    {
      title: "Education",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:consulting@blockchain.berkeley.edu">
          education@blockchain.berkeley.edu
        </a>
      ),
      content:
        "For any questions regarding our DeCal courses, EdX courses, and our education department.",
    },
    {
      title: "Research",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:research@blockchain.berkeley.edu">
          research@blockchain.berkeley.edu
        </a>
      ),
      content:
        "For any questions regarding potential research collaborations or our research department.",
    },
    {
      title: "External",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:external@blockchain.berkeley.edu">
          external@blockchain.berkeley.edu
        </a>
      ),
      content: "For any inquiries regarding public-facing partnerships.",
    },
    {
      title: "Governance",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:governance@blockchain.berkeley.edu">
          governance@blockchain.berkeley.edu
        </a>
      ),
      content: "For any inquiries regarding our governance initiatives.",
    },
    {
      title: "Recruitment",
      color: "#FECB33",
      image: "/images/content/email.svg",
      alt: "user",
      subtitle: (
        <a href="mailto:recruitment@blockchain.berkeley.edu">
          recruitment@blockchain.berkeley.edu
        </a>
      ),
      content: "For any questions regarding our club recruitment process.",
    },
  ];


  return (
    <>
      <Overview className="section" data={intro} />
      <div className={styles.negMargin}>
        {info.map((x, index) => (
          <CarouselItem content={x} />
        ))}
      </div>
    </>
  );
};

export default Contact;
