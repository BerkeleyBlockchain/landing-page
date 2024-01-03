import React, { useRef } from "react";
import Clients from "../../components/Clients";
import Overview from "../../components/Overview";
import Carousel from "../../components/Carousel";
import Stats from "../Home/Stats";
import Team from "./Team";

const About = () => {
  const scrollToRef = useRef(null);
  
  const intro = {
    tag: "About Us",
    title: "We are a community of passionate humans.",
    content: <div>In October 2016, the Berkeley Bitcoin Association, a group of about a dozen members, founded Blockchain at Berkeley, an organization dedicated to becoming the blockchain hub of the East Bay. They also debuted the world’s first undergraduate university-accredited blockchain course, Blockchain Fundamentals, taught to about 50 students. <br/><br/> Alongside Blockchain at Berkeley’s education team grew a consultancy that aimed to bridge the gap between geeky bitcoin enthusiasts and technovative early-adopters in the industry to develop Proof-of-Concepts for disruptive blockchain use cases. Since then, as a result of other ambitious B@B members, Research and Governance teams have also emerged.</div>,
    button: []
  }

  const alumniHeader = {
    stage: "Our Network",
    title: "Founded by our Alumni.",
    desc: "We hold close relationships with local conferences and blockchain projects created by Blockchain at Berkeley alumni."
  }

  
  
  const data = [
    {
      title: "CESC",
      url: "/images/content/cesc.svg",
    },
    {
      title: "Dekrypt",
      url: "/images/content/dekrypt-capital.svg",
    },
    {
      title: "Evmos",
      url: "/images/content/evmos.svg",
    },
    {
      title: "",
      url: "/images/content/fiat-lux.svg",
    },
    {
      title: "",
      url: "/images/content/opyn.svg",
    },
    {
      title: "BMW",
      url: "/images/content/osmosis.svg",
    },
    {
      title: "Exxon",
      url: "/images/content/aleo.svg",
    },
    {
      title: "Ford",
      url: "/images/content/sfbw.svg",
    },
    {
      title: "Microsoft",
      url: "/images/content/she256.svg",
    },
    {
      title: "IDEO",
      url: "/images/content/sommelier.svg",
    },
  ];

  const mission = [
    {
      title: "Our Mission",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/flag-dark.svg",
      alt: "user",
      content:
        "Blockchain at Berkeley drives innovation in the blockchain industry by building an ecosystem that empowers students to make an impact through practical education, consulting for enterprise companies, and conducting open source research.",
    },
    {
      title: "Our Vision",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/medal-dark.svg",
      alt: "medal",
      content:
        "Our vision is to build tomorrow's technology, today. We educate and empower the next generation of Blockchain users and developers. Our members are encouraged to experiment with new ideas and build powerful tools that push the technology's limits.",
    },
    {
      title: "Our Values",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/heart-dark.svg",
      alt: "lightning",
      content:
        "Blockchain at Berkeley lives by our values of innovation, boldness, inclusivity, excellence, and openness.",
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
      <Clients headerInfo={alumniHeader} data={data} />
      <Team />
    </>
  );
};

export default About;
