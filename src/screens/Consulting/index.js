import React, { useRef } from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Overview from "../../components/Overview";

const Consulting = () => {
    const scrollToRef = useRef(null);
    const intro = {
      tag: "Consulting",
      title: "Pioneering Blockchain Innovation",
      content: <div>Blockchain at Berkeley engages in consulting projects and cutting-edge research initiatives with leading industry partners. We bring together the brightest minds to tackle diverse projects across sectors, continuously advancing our blockchain expertise.</div>,
      button: ["Contact us", "/contact"]
    }

  const mission = [
    {
      title: "Consulting",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/flag-dark.svg",
      alt: "user",
      content:
        "Our developers are top CS students skilled in full-stack web3 development selected from a highly competitive interview process and trained in-house. Beyond web and blockchain development skills, we pride ourselves in designing technically beautiful solutions to complicated problems.",
    },
    {
      title: "Strategy",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/medal-dark.svg",
      alt: "medal",
      content:
        "Blockchain transcends traditional boundaries, blending elements from market strategy, use case analysis, to the intricacies of tokenomics and DeFi mechanism design. Our strategy consultants collaborate closely with clients, guiding them through each step to discover and refine the optimal solution tailored to their unique needs.",
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

export default Consulting;
