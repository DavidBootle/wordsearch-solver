import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.titleContainer}>
        <div className={styles.title}>Wordsearch Solver</div>
        <div className={styles.subtitle}>by <a href="https://bootletools.com">Bootle Tools</a></div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button}>Upload Image</button>
        <button className={styles.button}>Input Manually</button>
      </div>
    </main>
  )
}
