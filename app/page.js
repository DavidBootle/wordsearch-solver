import styles from './page.module.scss'
import Link from 'next/link'

import WordsearchSizeContainer from './wordsearchsizecontainer'

export default function Home() {

  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Wordsearch Solver</div>
        <div className={styles.subtitle}>by <a href="https://bootletools.com">Bootle Tools</a></div>
      </div>

      <WordsearchSizeContainer/>
    </>
  )
}
