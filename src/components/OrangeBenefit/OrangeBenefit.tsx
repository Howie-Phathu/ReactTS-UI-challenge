import React from "react";
import styles from './OrangeBenefit.module.css';

const OrangeBenefit: React.FC = () => {
  return (
    <section className={styles["orange-benefit"]}>
      <div className={styles["orange-benefit-content"]}>
        <div className={styles["orange-benefit-text"]}>
          <h2>Orange Benefit</h2>
          <p>Just recognize seeds and summer in golden sunshine.</p>
          <button className={styles["btn-learn-more"]}>Learn More</button>
        </div>
        <div className={styles["orange-benefit-image"]}>
          <img
            src="https://th.bing.com/th/id/OIP.jqxR_QrdtXQR6kfXBUHrBAHaFD?w=269&h=183&c=7&r=0&o=7&pid=1.7&rm=3" // Replace with actual image path
            alt="Orange Juice"
          />
        </div>
      </div>
    </section>
  );
};

export default OrangeBenefit;