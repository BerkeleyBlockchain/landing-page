import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.sass";
import cn from "classnames";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    // <div>
    //   {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    // </div>
    <div className={styles.container}>
      <div className={styles.countdownItem}>
        <h2 className={cn("h2", styles.title)}>{timeLeft.days}</h2>
        <div className={styles.text}>Days</div>
      </div>
      <div className={styles.countdownItem}>
        <h2 className={cn("h2", styles.title)}>{timeLeft.hours}</h2>
        <div className={styles.text}>Hours</div>
      </div>
      <div className={styles.countdownItem}>
        <h2 className={cn("h2", styles.title)}>{timeLeft.minutes}</h2>
        <div className={styles.text}>Minutes</div>
      </div>
      <div className={styles.countdownItem}>
        <h2 className={cn("h2", styles.title)}>{timeLeft.seconds}</h2>
        <div className={styles.text}>Seconds</div>
      </div>
    </div>
  );
};

// Helper function to calculate time left
const calculateTimeLeft = (date) => {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default CountdownTimer;
