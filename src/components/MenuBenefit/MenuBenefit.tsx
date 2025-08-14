import React from "react";
import styles from "./MenuBenefit.module.css";
import OpeningHours from "../OpeningHours/OpeningHours";

const MenuBenefit: React.FC = () => {
  const benefits = [
    { icon: "🍓", title: "Fresh", desc: "Playas brand no indestries" },
    { icon: "🍊", title: "Vitamin", desc: "Nisprea raba pichs" },
    { icon: "🥤", title: "Organic", desc: "Towarles wernuts" },
  ];

  return (
    <section className={styles["menu-benefit"]}>
      {/* Left Section - HELLO. with image */}
      <div className={styles["left-section"]}>
        <img 
          src="https://tse1.mm.bing.net/th/id/OIP._jGPRUAuR7yCa0F6lTtM-gHaFc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="Cherries" 
          className={styles["benefit-image"]}
        />
        <p className={styles["hello-text"]}>HELLO.</p>
      </div>

      {/* Middle Section - Menu Benefits */}
      <div className={styles["middle-section"]}>
        <h4 className={styles["menu-title"]}>OUR MENU BENEFIT</h4>
        <div className={styles["benefits-container"]}>
          {benefits.map((b, idx) => (
            <div key={idx} className={styles.benefit}>
              <div className={styles.icon}>{b.icon}</div>
              <h4 className={styles.title}>{b.title}</h4>
              <p className={styles.desc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Opening Hours */}
      <div className={styles["right-section"]}>
        <OpeningHours />
      </div>
    </section>
  );
};

export default MenuBenefit;