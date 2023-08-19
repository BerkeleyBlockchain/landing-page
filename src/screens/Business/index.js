import React, { useRef } from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Overview from "../../components/Overview";

const Business = () => {
    const scrollToRef = useRef(null);
    const intro = {
      tag: "Business",
      title: "Work with us.",
      content: <div>Blockchain at Berkeley engages in both consulting and research initiatives for industry partners looking to work with skilled intellectuals focused on blockchain. We have completed various projects across many industries and continue to improve our expertise.</div>,
      button: ["Contact us", "/contact"]
    }

  const mission = [
    {
      title: "Engineering",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/flag-dark.svg",
      alt: "user",
      content:
        "Our developers are students who are committed to expanding their knowledge of computer science. Beyond web and blockchain development skills, we pride ourselves in designing technically beautiful solutions to complicated problems.",
    },
    {
      title: "Business",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/medal-dark.svg",
      alt: "medal",
      content:
        "Because blockchain is an interdisciplinary field, our consultants come from a variety of backgrounds. From product launch strategy to use case evaluation, we work with the client to set a good direction and iterate until the best solution is found.",
    },
    {
      title: "Design",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/heart-dark.svg",
      alt: "lightning",
      content:
        "The biggest barrier to adoption of blockchain is tedious user experience and low familiarity with the technology. Our product designers play a strong role in bridging this gap, and are involved from start to finish in all levels of the project.",
    },
  ];

  return (
    <>
      <Overview className="section" data={intro}/>
      <Carousel
                items={mission}
                scrollToRef={scrollToRef}
                classNameTitle="h4"
                title=""
            />
    </>
  );
};

export default Business;
