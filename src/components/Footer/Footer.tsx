// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="cherries.jpg" alt="Cherries" />
        <p>HELLO.</p>
      </div>
      
      <div className="footer-middle">
        <h4>OUR MENU BENEFIT</h4>
        <div className="benefit-list">
          <div className="benefit-item">
            <span>Fresh</span>
            <p>Playas brand no indestries</p>
          </div>
          <div className="benefit-item">
            <span>Vitamin</span>
            <p>Nisprea raba pichs</p>
          </div>
          <div className="benefit-item">
            <span>Organic</span>
            <p>Towarles wernuts</p>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <h4>OPENING HOURS</h4>
        <ul>
          <li>Monday: 17:00 cm x 17</li>
          <li>Tuesday: 13:60 cm x 17</li>
          <li>Wednesday: 19:00 km x 11</li>
          <li>Thursday: 13:00 cm x 11</li>
        </ul>
      </div>
    </footer>
  );
};