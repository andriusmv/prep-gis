import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import { IconBrandGithub, IconBrandTwitter, IconCoffee } from '@tabler/icons-react'
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
    <script async src="https://analytics.umami.is/script.js" data-website-id="05cbf974-086d-4993-9f35-81934e68197e"></script>
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
    <div className={styles.gridicons}>
      <Link id="GitHub repository" href="https://github.com/andriusmv/prep-gis">
      <p className={styles.gridicons}><IconBrandGithub color="gray"/></p></Link>
      <Link id="Twitter profile" href="https://twitter.com/amorenva">
      <p className={styles.gridicons}><IconBrandTwitter color="gray"/></p></Link>
      <Link id="Buy me a coffee" href="https://www.buymeacoffee.com/pvdzpmpbqJ">
      <p className={styles.gridicons}><IconCoffee color="gray"/></p></Link>
    </div>
    </div>
  </footer>
  </>
  )
}
