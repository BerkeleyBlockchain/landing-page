import React, { useState } from "react";
import cn from "classnames";
import styles from "./Team.module.sass";
import Slider from "react-slick";
import Item from "./Item";
import Icon from "../../../components/Icon";
import ScrollParallax from "../../../components/ScrollParallax";
import Dropdown from "../../../components/Dropdown";

const categories = [
  "All",
  "Leadership",
  "Consulting",
  "Education",
  "Design",
  "Research",
];
const rank = [
  "President",
  "Head of Internal",
  "Head of External",
  "Head of Education",
  "Head of Consulting",
  "Head of Design",
  "Head of Xcelerator",
  "Head of Research",
]
const include = {
  Leadership: ["Leadership"],
  Consulting: [
    "Head of Consulting",
    "Dev Consultant",
    "Head of Design",
    "Design Consultant",
    "Business Consultant",
  ],
  Education: ["Head of Education", "Education"],
  Design: ["Head of Design", "Design Consultant"],
  Research: ["Head of Research", "Research"],
};

const people = [
  {
    name: "Aayushi Jain",
    image: "images/content/avatar.png",
    position: ["Head of Education", "Leadership"],
  },
  {
    name: "Aditya Bhandari",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Aditya Goel",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Adrian Kwan",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Akshaan Ahuja",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Alexander Wieland",
    image: "images/content/avatar.png",
    position: ["Research"],
  },
  {
    name: "Arjun Patrawala",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Aryan Bhadouria",
    image: "images/content/avatar.png",
    position: ["Business Consultant"],
  },
  {
    name: "Belle Tangkuptanon",
    image: "images/content/avatar.png",
    position: ["Head of Xcelerator", "Leadership"],
  },
  {
    name: "Brendan Wong",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Brent Friedman",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Brian Phan",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Daniel Gushchyan",
    image: "images/content/avatar.png",
    position: ["President", "Leadership"],
  },
  {
    name: "Derrick Cui",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Dhruv Gautam",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Research"],
  },
  {
    name: "Elizaveta Belkina",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Emma Guo",
    image: "images/content/avatar.png",
    position: ["Research"],
  },
  {
    name: "Gargi Deshpande",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Gurnoor Narula",
    image: "images/content/avatar.png",
    position: ["President", "Leadership"],
  },
  {
    name: "Hamza Mounir",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Harry Yuan",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Research"],
  },
  {
    name: "Heather Ding",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Isaac Ong",
    image: "images/content/avatar.png",
    position: ["Research"],
  },
  {
    name: "Jake Mok",
    image: "images/content/avatar.png",
    position: ["Head of Education", "Leadership"],
  },
  {
    name: "Jay Tipirneni",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Research"],
  },
  {
    name: "Jaylem Brar",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Jessica Situ",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Keshav Singhal",
    image: "images/content/avatar.png",
    position: ["Head of Xcelerator", "Leadership"],
  },
  {
    name: "Kyle Wonzen",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Lawson Graham",
    image: "images/content/avatar.png",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Maria Xu",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Design Consultant"],
  },
  {
    name: "Matthew Fogel",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Megan Ho",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Mohammed Alobaidi",
    image: "images/content/avatar.png",
    position: ["Head of Design", "Leadership"],
  },
  {
    name: "Naman Kapasi",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Niall Mandal",
    image: "images/content/avatar.png",
    position: ["Head of Research", "Leadership"],
  },
  {
    name: "Nidhi Shanmugam",
    image: "images/content/avatar.png",
    position: ["Business Consultant"],
  },
  {
    name: "Patrick Cui",
    image: "images/content/avatar.png",
    position: ["Head of Design", "Leadership"],
  },
  {
    name: "Paul Bryzek",
    image: "images/content/avatar.png",
    position: ["Business Consultant"],
  },
  {
    name: "Qianhua Ge",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Ravi Riley",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Richa Ray",
    image: "images/content/avatar.png",
    position: ["Head of External", "Leadership"],
  },
  {
    name: "Riddhi Patel",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Rishi Thakar",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Riteka Murugesh",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
  {
    name: "Riya Bhatia",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Rohan Khandelwal",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Sena Hazir",
    image: "images/content/avatar.png",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Shubhan Dua",
    image: "images/content/avatar.png",
    position: ["Business Consultant"],
  },
  {
    name: "Sid Sharma",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Education", "Research"],
  },
  {
    name: "Sophia Matthews",
    image: "images/content/avatar.png",
    position: ["Design Consultant"],
  },
  {
    name: "Sumukh Rashmi Suresh",
    image: "images/content/avatar.png",
    position: ["Business Consultant"],
  },
  {
    name: "Tiffany Liu",
    image: "images/content/avatar.png",
    position: ["Head of Internal", "Leadership"],
  },
  {
    name: "Tim Guo",
    image: "images/content/avatar.png",
    position: ["Dev Consultant", "Education", "Research"],
  },
  {
    name: "Tommy Hang",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Trevor Trinh",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "Vardhan Shorewala",
    image: "images/content/avatar.png",
    position: ["Dev Consultant"],
  },
  {
    name: "William Zeng",
    image: "images/content/avatar.png",
    position: ["Education"],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Team = () => {
  const [direction, setDirection] = useState(categories[0]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  function shouldDisplay(category, positions) {
    for (let p of positions) {
      if (include[category].indexOf(p) !== -1) {
        return true;
      }
    }
    return false;
  }

  function position(input) {
    if (direction === "All" || direction === "Leadership") {
      return input.filter((x) => x !== "Leadership")[0]
    }
    return input.filter((x) => include[direction].indexOf(x) !== -1)[0];
  }

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>Meet the Team</h2>
          <div className={styles.info}>
            We’re a student-run organization that promotes innovation in the
            avatar industry through education, consulting, design, and research.
            We aren’t purely professional, we’re a team of friends,
            collaborators, and students of likeminded peers who ideate, and
            adventure together.
          </div>
          <div className={styles.nav}>
            {categories.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x === direction,
                })}
                onClick={() => setDirection(x)}
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
          <Dropdown
            className={styles.dropdown}
            value={direction}
            setValue={setDirection}
            options={categories}
          />
        </div>
        <div className={styles.wrap}>
          <Slider className={cn("team-slider", styles.slider)} {...settings}>
            {people
              .filter(
                (x) =>
                  direction === "All" || shouldDisplay(direction, x.position)
              )
              .sort((a, b) => {
                var aScore = 0;
                var bScore = 0;
                if (rank.indexOf(position(a.position)) === -1) {
                  aScore = 100;
                } else {
                  aScore = rank.indexOf(position(a.position))
                }
                if (rank.indexOf(position(b.position)) === -1) {
                  bScore = 100;
                } else {
                  bScore = rank.indexOf(position(b.position))
                }
                return aScore - bScore;
              })
              .map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Item className={styles.item} item={x} category={direction} />
                </ScrollParallax>
              ))
              }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
