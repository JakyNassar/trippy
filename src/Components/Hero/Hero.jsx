
import styles from './Hero.module.css'
export default function Hero({title,description,bgImage,btn}) {
  return (
    <div className={styles.hero}>
      <img className={styles.bgImage} src={bgImage} alt="backgroundImage is not found" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.heroDescription}>{description}</p>
      {btn? <button className={styles.btn}> {btn}</button> :""}
      
    </div>
  )
}
