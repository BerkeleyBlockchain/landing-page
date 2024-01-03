import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Section from "../../components/Section";
import ValueProps from "../../components/Departments";
import Stats from "./Stats";
import Initiatives from "../Design/Initiatives";

const Home = () => {
  const scrollToRef = useRef(null);

  const accelerator = {
    title: "Berkeley Blockchain Accelerator",
    desc: "The Xcelerator is UC Berkeley’s university-based, blockchain accelerator founded and staffed by Blockchain at Berkeley as a joint venture with Berkeley’s Haas School of Business, SCET of Berkeley Engineering. Since its inception in 2019, the Xcelerator has accelerated 85 companies that have raised a total of $450M+ in follow-on funding, making the Xcelerator one of the best in it’s class.",
    buttons: [["Learn More", "https://xcelerator.berkeley.edu"]],
    asset: "rocket"
  };

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

  const stats = [
    {
      title: "Startups Founded",
      counter: "10+",
      images: "/images/content/user-yellow.svg",
      alt: "user",
    },
    {
      title: "Consulting Projects",
      counter: "40+",
      images: "/images/content/coin.svg",
      alt: "electrical-plus",
    },
    {
      title: "Partners Worldwide",
      counter: "20+",
      images: "/images/content/globe.svg",
      alt: "flag",
    },
    {
      title: "EdX Students",
      counter: "200k+",
      images: "/images/content/flag-yellow.svg",
      alt: "education",
    },
  ];

  const initiatives = [
    {
      title: "Consutling",
      image: "/images/content/consulting-overview.png",
      image2x: "/images/content/consulting-overview@2x.png",
      content:
        "Blockchain at Berkeley engages in both consulting and research initiatives for industry partners looking to work with skilled intellectuals focused on blockchain. We have completed various projects across many industries and continue to improve our expertise.",
        url: "/business"
      },
    {
      title: "Education",
      image: "/images/content/education-overview.png",
      image2x: "/images/content/education-overview@2x.png",
      content:
        "We aim to create an inclusive environment and provide a space for people of any background to grow and thrive. You can find our courses and educational content on platforms like edX, YouTube, and on campus through DeCal courses offered to UC Berkeley students.",
      url: "/education"
    },
    {
      title: "Design",
      image: "/images/content/design-overview.png",
      image2x: "/images/content/design-overview@2x.png",
      content:
        "We regard design as the vital bridge that makes advanced technology accessible to those who stand to benefit most. Fueled by our creative insight, we strive to develop and refine user experiences for the technology of tomorrow.",
      url: "/design"
    },
    {
      title: "Research",
      image: "/images/content/research-overview.png",
      image2x: "/images/content/research-overview@2x.png",
      content:
        "Our research team is made up of highly experienced individuals who are dedicated to using their industry expertise to push the boundaries of the space. We also have a governance team that participates in improving many top protocols by voting on community made proposals, and even making our own.",
      url: "/research"
    },
  ];

  const items = [
    {
      title: "Companies Accelerated",
      counter: "85",
      images: "/images/content/flag-yellow.svg",
      alt: "user",
    },
    {
      title: "Raised Follow-on Funding",
      counter: "60%",
      images: "/images/content/user-yellow.svg",
      alt: "electrical-plus",
    },
    {
      title: "Global Partners",
      counter: "20+",
      images: "/images/content/globe.svg",
      alt: "flag",
    },
    {
      title: "Follow-on Raised",
      counter: "$400M",
      images: "/images/content/coin.svg",
      alt: "facebook",
    },
  ];

  const data = [{
    title: "Airbus",
    url: "/images/content/airbus.svg",
  },
  {
    title: "BDO",
    url: "/images/content/bdo.svg",
  },
  {
    title: "UNICEF",
    url: "/images/content/unicef.svg",
  },
  {
    title: "",
    url: "/images/content/vf.svg",
  },
  {
    title: "",
    url: "/images/content/federal.svg",
  },
    {
      title: "BMW",
      url: "/images/content/bmw.svg",
    },
    {
      title: "Exxon",
      url: "/images/content/exxon.svg",
    },
    {
      title: "Ford",
      url: "/images/content/ford.svg",
    },
    {
      title: "Microsoft",
      url: "/images/content/microsoft.svg",
    },
    {
      title: "IDEO",
      url: "/images/content/ideo.svg",
    },

    {
      title: "Inspur",
      url: "/images/content/inspur.svg",
    },
    {
      title: "Iota",
      url: "/images/content/iota.svg",
    },
    {
      title: "Qualcomm",
      url: "/images/content/qualcomm.svg",
    },
    {
      title: "Toyota",
      url: "/images/content/toyota.svg",
    },
    {
      title: "Tsinghua",
      url: "/images/content/tsinghua.svg",
    },
  ];

  const consultingHeader = {
    stage: "Consulting",
    title: "Our previous clients",
    desc: "Blockchain at Berkeley is an award-winning blockchain consulting and development team. We believe in the power of blockchain applications and seek to expand understanding across industries, academia, governments, and beyond."
  }

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <ValueProps className="section" scrollToRef={scrollToRef} />
      <Stats items={stats} />
      <Clients headerInfo={consultingHeader} data={data}/>
      <Initiatives className="section" items={initiatives} title="Our Departments" description="Our various departments spearhead projects and initiatives that make meaningful contributions to the blockchain space and provide members with valuable experiences." />
      <Section data={accelerator} imageOnLeft={true}/>
      <Stats items={items} />
      <Section data={ux} imageOnLeft={true}/>
    </>
  );
};

export default Home;
