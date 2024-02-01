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
      [
        "Case Study",
        "https://www.behance.net/gallery/190476687/SimpleFi-DeFi-App-for-Crypto-Newbies",
      ],
    ],
    asset: "simplefi",
  };

  const items = [
    {
      title: "UX Research + Prototyping",
      image: "/images/content/design-pic-1.png",
      image2x: "/images/content/design-pic-1@2x.png",
      content:
        "Each semester, we embark on a journey to unravel a key question in the realm of blockchain, guiding our path from research and ideation to prototyping.",
    },
    {
      title: "Product Design + Consulting",
      image: "/images/content/design-pic-2.png",
      image2x: "/images/content/design-pic-2@2x.png",
      content:
        "We craft high-fidelity prototypes for our consulting clients, fostering a culture of mutual enhancement where valuable feedback refines and elevates our collective design expertise.",
    },
    {
      title: "Brand Design + Marketing",
      image: "/images/content/design-pic-3.png",
      image2x: "/images/content/design-pic-3@2x.png",
      content:
        "We meticulously shape the brand identity of our organization and design comprehensive marketing materials. Our brand is a reflection of our commitment to innovation turning great ideas into great designs.",
    },
  ];

  return (
    <>
      <Overview className="section" data={intro} scrollToRef={scrollToRef}/>
      <Initatives className="section" items={items} title="Our Initiatives" description="We are the team that curates the brand of our organization, deliver high-fidelity prototypes for consulting projects, and spearhead UX research initiatives." ref={scrollToRef} />
      <Section data={ux} imageOnLeft={true} isButtonSpecial={true} />
    </>
  );
};

export default Design;
