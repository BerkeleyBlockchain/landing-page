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
  "Head of Xcelerator"
]
const include = {
  Leadership: ["Leadership"],
  Consulting: [
    "Head of Consulting",
    "Consultant",
    "Senior Advisor"
  ],
  Education: ["Head of Education", "Edu"],
  Design: ["Head of Design", "Designer", "Head of Internal", "Head of External"],
  Research: ["Head of Research", "Research"],
};

const people = [
  {
    name: "Ezra Tramble",
    position: ["President", "Leadership"],
  },
  {
    name: "Sanjay Amirthraj",
    position: ["President", "Leadership"],
  },
  {
    name: "Jameson Crate",
    position: ["Consultant"],
  },
  {
    name: "Jeff Chen",
    position: ["Consultant"],
  },
  {
    name: "Marc Karimi",
    position: ["Consultant"],
  },
  {
    name: "Zachary Brandt",
    position: ["Consultant"],
  },
  {
    name: "Varun Vaidya",
    position: ["Consultant"],
  },
  {
    name: "He Song",
    position: ["Education"],
  },
  {
    name: "Satwik Panigrahi",
    position: ["Education"],
  },
  {
    name: "Kushagra Srivastava",
    position: ["Consultant"],
  },
  {
    name: "Karaan Shetty",
    position: ["Education"],
  },
  {
    name: "Hari Srikanth",
    position: ["Consultant"],
  },
  {
    name: "Pratyay Pandey",
    position: ["Consultant"],
  },
  {
    name: "Aryan Parekh",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Tvisha Ranjan",
    position: ["Designer"],
  },
  {
    name: "Sara Magaziotis-Ginori",
    position: ["Consultant"],
  },
  {
    name: "Shrithan Sandadi",
    position: ["Consultant"],
  },
  {
    name: "Shaan Fulton",
    position: ["Consultant"],
  },
  {
    name: "Roger Mas",
    position: ["Consultant"],
  },
  {
    name: "Shivam Kumar",
    position: ["Consultant"],
  },
  {
    name: "Olivia Li",
    position: ["Consultant"],
  },
  {
    name: "Aman Shah",
    position: ["Head of Consulting", "Leadership"],
  },
  {
    name: "Haluk Cem Demirhan",
    position: ["Consultant"],
  },
  {
    name: "Rohan Patra",
    position: ["Senior Advisor", "Consulting"],
  },
  {
    name: "Arushi Arora",
    position: ["Senior Advisor", "Designer"],
  },
  {
    name: "Joanna Ye",
    position: ["Designer"],
  },
  {
    name: "Akshaat Parikh",
    position: ["Designer"],
  },
  {
    name: "Sarah Mou",
    position: ["Head of Design", "Leadership"],
  },
  {
    name: "Elson Liu",
    position: ["Head of Education", "Leadership"],
  },
  {
    name: "Arshia Narula",
    position: ["Head of Internal", "Leadership", "Design"],
  },
  {
    name: "Oleg Viatkin",
    position: ["Head of External", "Leadership", "Design"],
  },
  {
    name: "Akshat Sharma",
    position: ["Head of Xcelerator", "Leadership"],
  },
  {
    name: "Isaac Oh",
    position: ["Head of Research", "Leadership"],
  },
  {
    name: "Ethan Gu",
    position: ["Consultant"],
  },
  {
    name: "Fujia Wang",
    position: ["Consultant"],
  },
  {
    name: "Kelly Zeng",
    position: ["Edu"],
  },
  {
    name: "Mason Arditi",
    position: ["Consultant"],
  },
  {
    name: "Oliviq Li",
    position: ["Consultant"],
  },
  {
    name: "Parisa Haq",
    position: ["Designer"],
  },
  {
    name: "Romain Magne",
    position: ["Consultant"],
  },
  {
    name: "Souradeep Das",
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
            blockchain industry through education, consulting, design, and research.
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
                // var aScore = 0;
                // var bScore = 0;
                // if (rank.indexOf(position(a.position)) === -1) {
                //   aScore = 100;
                // } else {
                //   aScore = rank.indexOf(position(a.position))
                // }
                // if (rank.indexOf(position(b.position)) === -1) {
                //   bScore = 100;
                // } else {
                //   bScore = rank.indexOf(position(b.position))
                // }
                // if (aScore === bScore) {
                //   return a.name.localeCompare(b.name);
                // } else {
                //   return aScore - bScore;
                // }
                // Special handling for Design category
                if (direction === "Design") {
                  const aIsHeadDesign = a.position.includes("Head of Design");
                  const bIsHeadDesign = b.position.includes("Head of Design");
                  if (aIsHeadDesign && !bIsHeadDesign) return -1;
                  if (!aIsHeadDesign && bIsHeadDesign) return 1;
                }

                // Regular ranking logic
                var aScore = rank.indexOf(position(a.position)) === -1 ? 100 : rank.indexOf(position(a.position));
                var bScore = rank.indexOf(position(b.position)) === -1 ? 100 : rank.indexOf(position(b.position));

                if (aScore === bScore) {
                  return a.name.localeCompare(b.name);
                } else {
                  return aScore - bScore;
                }

              })

              .map((x, index) => (
                <ScrollParallax className={styles.slide} key={index}>
                  <Item className={styles.item} item={x} category={direction} imgSrc={`images/avatars/${x.name.replace(/\s+/g, "")}.jpg?v=${process.env.REACT_APP_VERSION || '1.0'}`} />
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
