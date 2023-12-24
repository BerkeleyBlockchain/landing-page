import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";

const Item = ({ item, className, category, imgSrc}) => {
  const [visibleModal, setVisibleModal] = useState(false);

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

  function position(input) {
    if (category === "All" || category === "Leadership") {
      return item.position.filter((x) => x !== "Leadership")[0];
    }
    return item.position.filter((x) => include[category].indexOf(x) !== -1);
  }

  const replaceImage = (error) => {
    //replacement of broken Image
    error.target.src = "images/content/avatar.png";
  };

  return (
    <>
      <div
        className={cn(styles.item, className)}
        onClick={() => setVisibleModal(true)}
      >
        <div className={styles.avatar}>
          <img
            src={imgSrc}
            onError={replaceImage}
            alt="Avatar"
          />
        </div>
        <div className={styles.man}>{item.name}</div>
        <div className={styles.position}>{position(item.position)}</div>
      </div>
    </>
  );
};

export default Item;
