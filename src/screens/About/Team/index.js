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
  "Head of Consulting",
  "Head of Design",
  "Head of Education",
  "Head of Research",
]
const include = {
  Leadership: ["Leadership"],
  Consulting: [
    "Head of Consulting",
    "Consultant",
  ],
  Education: ["Head of Education", "Edu"],
  Design: ["Head of Design", "Designer"],
  Research: ["Head of Research", "Research"],
};

const people = [
  {
    name: "Gurnoor Narula",
    position: ["President", "Leadership"],
  },
  {
    name: "Daniel Gushchyan",
    position: ["President", "Leadership"],
  },
  {
    name: "Zachary Brandt",
    position: ["Consulting"],
  },
  {
    name: "Varun Vaidya",
    position: ["Consulting"],
  },
  {
    name: "Vardhan Shorewala",
    position: ["Consultant"],
  },
  {
    name: "Trevor Trinh",
    position: ["Consultant"],
  },
  {
    name: "Tommy Hang",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Teo Honda-Scully",
    position: ["Consultant"],
  },
  {
    name: "Tanay Appannagari",
    position: ["Consultant"],
  },
  {
    name: "Rohan Patra",
    position: ["Consultant"],
  },
  {
    name: "Richa Ray",
    position: ["Consultant"],
  },
  {
    name: "Ravi Riley",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Jay Tipirneni",
    position: ["Consultant", "Research"],
  },
  {
    name: "Haluk Cem Demirhan",
    position: ["Consultant"],
  },
  {
    name: "Gargi Deshpande",
    position: ["Consultant"],
  },
  {
    name: "Ezra Tramble",
    position: ["Consultant"],
  },
  {
    name: "Brendan Wong",
    position: ["Consultant"],
  },
  {
    name: "Adrian Kwan",
    position: ["Consultant"],
  },
  {
    name: "Sophia Matthews",
    position: ["Designer"],
  },
  {
    name: "Riya Bhatia",
    position: ["Designer"],
  },
  {
    name: "Rishi Thakar",
    position: ["Designer"],
  },
  {
    name: "Patrick Cui",
    position: ["Head of Design", "Leadership"],
  },
  {
    name: "Mohammed Alobaidi",
    position: ["Head of Design", "Leadership"],
  },
  {
    name: "Jessica Situ",
    position: ["Designer"],
  },
  {
    name: "Brian Phan",
    position: ["Designer"],
  },
  {
    name: "Arushi Arora",
    position: ["Designer"],
  },
  {
    name: "Naman Kapasi",
    position: ["Edu"],
  },
  {
    name: "Mehaa Amirthalingam",
    position: ["Edu"],
  },
  {
    name: "Krishna Mandal",
    position: ["Edu"],
  },
  {
    name: "Jaylem Brar",
    position: ["Edu"],
  },
  {
    name: "Fischer Zhang",
    position: ["Edu"],
  },
  {
    name: "Brent Friedman",
    position: ["Head of Education", "Leadership"],
  },
  {
    name: "Alyssa Chen",
    position: ["Edu"],
  },
  {
    name: "Aditya Goel",
    position: ["Edu"],
  },
  {
    name: "Aayushi Jain",
    position: ["Edu"],
  },
  {
    name: "Tiffany Liu",
    position: ["Head of Internal", "Leadership"],
  },
  {
    name: "Riddhi Patel",
    position: ["Head of External", "Leadership"],
  },
  {
    name: "Keshav Singhal",
    position: ["Head of Xcelerator"],
  },
  {
    name: "Belle Tangkuptanon",
    position: ["Head of Xcelerator"],
  },
  {
    name: "Aryan Bhadouria",
    position: ["Internal/External"],
  },
  {
    name: "Akshat Sharma",
    position: ["Xcelerator"],
  },
  {
    name: "Niall Mandal",
    position: ["Head of Research", "Leadership"],
  },
  {
    name: "Dhruv Gautam",
    position: ["Research"],
  },
  {
    name: "Derrick Cui",
    position: ["Research"],
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

  /**
   * This function returns the position of a team member based on the selected category.
   * If the selected category is "All" or "Leadership", it returns the first position of the member that is not "Leadership".
   * Otherwise, it returns the first position of the member that is included in the selected category.
   *
   * @param {Array} input - The positions of a team member.
   * @returns {string} - The position of the team member based on the selected category.
   */
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
                if (aScore === bScore) {
                  return a.name.localeCompare(b.name);
                } else {
                  return aScore - bScore;
                }
              })
              
              .map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Item className={styles.item} item={x} category={direction} imgSrc={`images/avatars/${x.name.replace(" ", "")}.jpg`}/>
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
