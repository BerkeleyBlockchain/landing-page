import Section from "../../components/Section";
import Overview from "../../components/Overview";

const Research = () => {
    const intro = {
      tag: "Research",
      title: "Join Our Research.",
      content: <div>Blockchain at Berkeley engages an ecosystem of Berkeley students, professors and researchers in activities with industry partners looking to work with skilled intellectuals focused on blockchain technology.</div>,
      button: ["Contact us", "/contact"]
    }

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
  
    const cosmos = {
      title: "Cosmos-IBC Research",
      desc: "Cosmos, by itself, is not a blockchain. Rather, it is a toolkit for builders to easily create their own interoperable application-specific blockchain. To enable cross-chain communication, the Cosmos ecosystem devised the Inter-blockchain Communication (IBC) protocol as their standard for cross-chain communication. This research team is designed to be an open-ended effort to learn, document, and build on top of the Cosmos IBC ecosystem.",
      buttons: [
      ],
      asset: "hardware-wallet",
    };

    const clients = {
      title: "Developing Performant Node Clients",
      desc: "Ethereum is currently one of the most used Blockchain networks for DeFi interactions. As such, there exists a need to modify existing node clients to support more flexible, performant queries for large scale chain data analysis, state simulation and internal tx processing.",
      buttons: [
      ],
      asset: "asset-eth",
    };

  return (
    <>
      <Overview className="section" data={intro}/>
      <Section data={node} imageOnLeft={true} />
      <Section data={cosmos} imageOnLeft={false} />
      <Section data={clients} imageOnLeft={true} />
    </>
  );
};

export default Research;
