import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Section from "../../components/Section";
import ValueProps from "../../components/Departments";
import Stats from "./Stats";

const Home = () => {
  const scrollToRef = useRef(null);

  const accelerator = {
    title: "Berkeley Blockchain Accelerator",
    desc: "The Xcelerator is UC Berkeley’s university-based, blockchain accelerator founded and staffed by Blockchain at Berkeley as a joint venture with Berkeley’s Haas School of Business, SCET of Berkeley Engineering. Since its inception in 2019, the Xcelerator has accelerated 85 companies that have raised a total of $450M+ in follow-on funding, making the Xcelerator one of the best in it’s class.",
    buttons: [["Learn More", "https://xcelerator.berkeley.edu"]],
    asset: "rocket"
  };

  const regulation = {
    title: "Navigating the Frontier of Crypto Regulation",
    desc: "In the United States, obstruction of privacy has regularly been used as a way to observe citizens by government agencies. Bitcoin, the most widely used cryptocurrency, is built upon blockchain technology and allows for the possibility of an open, inclusive, global financial system. In their infancy, Bitcoin and other cryptocurrencies were unregulated. Interest in moderating the space has exploded in the last two years, as lawmakers have realized the space is messy and rules must be set in place. We’ve spent several months closely watching the ensuing attempts at regulating the space. We provide an overview of crypto regulation and its implications.",
    buttons: [["Learn More", "https://calblockchain.mirror.xyz/2jApCnHJElssho7cgZ6YXVVzkFV_AfpXttD_KBhq8TI"]],
    asset: "flying-coins"
  };

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
      <Clients headerInfo={consultingHeader} data={data}/>
      <Section data={accelerator} imageOnLeft={true}/>
      <Stats items={items} />
      <Section data={regulation} imageOnLeft={false}/>
    </>
  );
};

export default Home;
