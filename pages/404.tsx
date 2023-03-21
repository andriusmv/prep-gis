import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Custom404() {
    return(
        <main>
        <div className={styles.main}>
        <h3>Not ready yet 🏗️ 404 
        <p><br/>... work in progress.<br/><br/>
        Consider supporting this project at 
        <br/><br/>
        <Link href="https://www.buymeacoffee.com/pvdzpmpbqJ">
        <span>BUY ME A COFFEE ☕</span></Link>
        </p>
        </h3>
        </div>
        </main>
    )
}