import React, { useRef } from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";
import Initatives from "./Initiatives";
import Overview from "../../components/Overview";

const Design = () => {
    const scrollToRef = useRef(null);
    const intro = {
      tag: "Design",
      title: "Human-Centered Design in the World of Blockchain.",
      content: <div>Founded in 2018, Blockchain at Berkeley's design department stands at the intersection of artistic expression and blockchain innovation. We regard design as the vital bridge that makes advanced technology accessible to those who stand to benefit most. Fueled by our creative insight, we strive to develop and refine user experiences for the technology of tomorrow.</div>,
      button: ["Explore", "/contact"]
    }

  const ux = {
    title: "SimpleFi: DeFi app for crypto newbies",
    desc: "SimpleFi is a decentralized finance app for beginners and non-technical users. The app integrates gesture-based shortcuts and context-aware AI assistants to ensure a smooth onramp for DeFi users who new to the crypto space. The platform supports trading and swapping various tokens, and provides a simple wallet for managing assets.",
    buttons: [
      //[
        // "Learn More",
        // "https://medium.com/blockchain-at-berkeley/community-node-initiative-press-release-43fba98a7ff3",
      //],
    ],
    asset: "simplefi",
  };

  return (
    <>
      <Overview className="section" data={intro} scrollToRef={scrollToRef}/>
      <Initatives className="section" ref={scrollToRef} />
      <Section data={ux} imageOnLeft={true} />
    </>
  );
};

export default Design;