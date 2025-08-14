import React from "react";
import styles from "./OrangeCards.module.css";

const OrangeCards: React.FC = () => {
  const cards = [
    {
      img: "https://tse2.mm.bing.net/th/id/OIP.y93Ql1BawxNQC3mQ-DdNEwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Arcu Volut Fat Vitae",
      desc: "Phasellus egestas"
    },
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.PKHYlstDYAp3lswvX1o0aAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "$19,99, 90,99€",
      desc: "Ornare past bronps"
    },
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.Q-BcQk4Weqz1xGMVmaol-wHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Sfiely Tun Drenard",
      desc: "Ornando suntiers"
    },
  ];

  return (
    <section className={styles["orange-cards"]}>
      {cards.map((card, idx) => (
        <div key={idx} className={styles.card}>
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default OrangeCards;
