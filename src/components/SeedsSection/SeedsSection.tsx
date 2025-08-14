import React from "react";
import styles from "./SeedsSection.module.css";

const SeedsSection: React.FC = () => {
  return (
    <section className={styles["seeds-section"]}>
      <div className={styles["text-image"]}>
        <div className={styles["text-content"]}>
            <h2>Just imagine </h2>
            <h2>seeds and </h2>
            <h2>summer in gell</h2>
            <h2> sunshine.</h2>
        </div>
        <div className={styles["image-content"]}>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP._jGPRUAuR7yCa0F6lTtM-gHaFc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Red Berries"
          />
        </div>
      </div>
      <div className={styles["benefit-box"]}>
        <h3>EBEE WOUS BENEFIT</h3>
        <p>With best taste, healthy vibes & full nutrition.</p>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default SeedsSection;