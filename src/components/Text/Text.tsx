
import styles from './Text.module.css'

export const Text = () => {
  return (
    <>
    <div className={styles.bowlDiv}>
      <div className={styles.firstDiv}>
        <div className={styles.headerRow}>
          <h5>Premium Restaurant</h5>
          <button className={styles.signBtn}>SIGN-IN</button>
        </div>
        <div>
          <h1>Anida</h1>
          <h1>Dedelay</h1>
        </div>
        <div>
          <p>BEST HEALTHY SALAD SERVED</p>
           <p>IN OUR RESTAURANT</p>
        </div>
        
          <button className={styles.learnBtn}>LEARN MORE</button>
      </div>
    </div>
    </>
  )
}
