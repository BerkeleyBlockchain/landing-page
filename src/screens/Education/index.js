import React, { useRef } from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Overview from "../../components/Overview";

const Education = () => {
    const scrollToRef = useRef(null);
    const intro = {
      tag: "Education",
      title: "Enroll in our courses.",
      content: <div>Join over 150,000 students in earning our renowned BerkeleyX Blockchain Fundamentals Professional Certificate verifying completion of our two-pronged, free online course series developed by Blockchain at Berkeley and faculty from UC Berkeley’s premier Computer Science department.</div>,
      button: ["Explore", "/contact"]
    }

    const fun = {
      title: "Fundamentals of Blockchain Technology",
      desc: "The Blockchain Fundamentals DeCal is a comprehensive survey of relevant topics in cryptocurrency and the wider blockchain space. The goal of this class is to cut through the diverse and often contrasting rhetoric around blockchain and focus on the technological underpinnings, after which you will have the tools that you need to develop your own opinion about the technology.",
      buttons: [
        [
          "Learn More",
          "https://classes.berkeley.edu/content/2024-spring-compsci-198-078-grp-078",
        ],
      ],
      asset: "bitcoin",
    };
  
    const dev = {
      title: "Blockchain for Developers",
      desc: "This DeCal is designed to provide students a comprehensive overview of relevant topics in blockchain development, as well as hands-on experience in developing and deploying their own smart contracts & sovereign Cosmos blockchains.",
      buttons: [
        [
          "Learn More",
          "https://classes.berkeley.edu/content/2024-spring-compsci-198-077-grp-077",
        ],
      ],
      asset: "mining",
    };

  return (
    <>
      <Overview className="section" data={intro} scrollToRef={scrollToRef}/>
      <Section ref={scrollToRef} data={fun} imageOnLeft={false} />
      <Section data={dev} imageOnLeft={true} />
    </>
  );
};

export default Education;
