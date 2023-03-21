import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
        <title>GIS Exam Study Prep</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
  <header className={styles.menuheader}>
    <ul className={styles.gridmenu}>
      <Link href="/"><li>🏠 Home</li></Link>
      <Link href="/exam"><li>📃 Exam List</li></Link>
    </ul>
  </header>
  <main>
  <Component {...pageProps} />
  </main>
  <footer>
    <div className={styles.main}>
    <h3>Consider supporting this project at<br/>
      <Link href="https://www.buymeacoffee.com/pvdzpmpbqJ">
        <span>BUY ME A COFFEE ☕</span></Link>
    </h3>
    </div>
  </footer>
  </>
  )
}
