import styles from './Navbar.module.css'
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>🍽️</div>
          <h2 className={styles.brandText}>Premium Restaurant</h2>
        </div>
        
        <div className={styles.links}>
          <a href='/#home' className={styles.link}>HOME</a>
          <a href='/#menu' className={styles.link}>MENU</a>
          <a href='/#pages' className={styles.link}>PAGES</a>
          <a href='/#blog' className={styles.link}>BLOG</a>
          <a href='/#contact' className={styles.link}>CONTACT US</a>      
        </div>
        
        <div className={styles.actions}>
          <CgProfile size={24} className={styles.icon} />
          <HiOutlineShoppingCart size={24} className={styles.icon} /> 
        </div>
      </div>
    </nav>
  )
}
