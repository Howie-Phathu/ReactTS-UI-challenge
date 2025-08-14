import React from "react";
import styles from "./OpeningHours.module.css";


const MenuBenefit: React.FC = () => {
  const benefits = [
    { icon: "🍓", title: "Fresh", desc: "Plays a bright and refreshing note" },
    { icon: "🍊", title: "Vitamin", desc: "Nipsen need protein" },
    { icon: "🥤", title: "Organic", desc: "Towels ages worries" },
  ];

  return (
    <section className={styles["menu-benefit"]}>
      <div className={styles["image-section"]}>
        <img 
          src="https://tse1.mm.bing.net/th/id/OIP._jGPRUAuR7yCa0F6lTtM-gHaFc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="Bowl of berries" 
          className={styles["benefit-image"]}
        />
      </div>
      <div className={styles["benefits-container"]}>
        {benefits.map((b, idx) => (
          <div key={idx} className={styles.benefit}>
            <div className={styles.icon}>{b.icon}</div>
            <h4 className={styles.title}>{b.title}</h4>
            <p className={styles.desc}>{b.desc}</p>
          </div>
        ))}
        <div className={styles["hours-content"]}>
        <h2>Opening Hours</h2>
        <p>Monday to Friday: 9 AM - 9 PM</p>
        <p>Saturday: 10 AM - 10 PM</p>
        <p>Sunday: Closed</p>
      </div>
      </div>
      
    </section>
  );
};

export default MenuBenefit;