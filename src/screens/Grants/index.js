import React, { useRef } from "react";
import Section from "../../components/Section";
import Carousel from "../../components/Carousel";

const Grants = () => {
    const scrollToRef = useRef(null);
  const intro = {
    title: "Blockchain at Berkeley Grants",
    desc: "Blockchain at Berkeley Grants is motivated by one core objective—to bridge the gap between students’ unbridled potential and the resources they need to manifest their vision. Our mission is to foster student-driven blockchain innovation through early-stage funding to trailblazing startups, novel projects, and transformative research. The future of high-impact, student-targeted funding is students empowering students.",
    buttons: [
      [
        "Learn More",
        "https://calblockchain.mirror.xyz/O6sX6CZu5R-9o_Ft5RDPUn8Qij8Ad1YZ7g8qpA-Vvyc",
      ],
    ],
    asset: "grants",
  };

  const node = {
    title: "Community Node Initiative",
    desc: "Our Community Node Initiative enables us to take a more active role in the blockchain community by operating nodes for decentralized protocols. We've started with several nodes and through community engagement, we aim to host more. As a student-run organization, our motivations for running nodes are purely educational. We also have a desire to help progress innovative projects led by our community members. We are not led by profits. We bring a unique perspective to the community to ensure that the proper motivations are behind every network decision.",
    buttons: [
      [
        "Learn More",
        "https://medium.com/blockchain-at-berkeley/community-node-initiative-press-release-43fba98a7ff3",
      ],
    ],
    asset: "node",
  };

  const mission = [
    {
      title: "Financing",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/flag-dark.svg",
      alt: "user",
      content:
        "Financial barriers should never hinder the proliferation of groundbreaking ideas. Early-stage funding gives students the financial stability to create freely. This is why we want to lower the barrier to entry for building and innovating on a large scale for students.",
    },
    {
      title: "Connections",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/medal-dark.svg",
      alt: "medal",
      content:
        "The blockchain industry is driven by ideology — one of inclusivity and open contribution. We aim to leverage our position in the blockchain ecosystem to help more deeply integrate selected projects into the blockchain community and inspire sustainable connections.",
    },
    {
      title: "Community",
      url: "/class02-details",
      color: "#FECB33",
      image: "/images/content/heart-dark.svg",
      alt: "lightning",
      content:
        "By cultivating a collective of like-minded student innovators, we will provide grant recipients with a collaborative community conducive to each team’s growth. We want the most promising and innovative ideas to be brought forth, benefiting the blockchain community.",
    },
  ];

  return (
    <>
      <Section data={intro} imageOnLeft={false} />
      <Carousel
                items={mission}
                scrollToRef={scrollToRef}
                classNameTitle="h4"
                title=""
            />
      <Section data={node} imageOnLeft={true} />
    </>
  );
};

export default Grants;
