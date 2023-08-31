import "@/styles/globals.css";
import styles from "@/styles/Home.module.css";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconCoffee,
} from "@tabler/icons-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "GIS Exam Study Prep | Get Certified in ArcGIS, GIS, and More",
  description:
    "You Want To Get Certified in GIS But Don't Know How To Start? Study and Prepare Here For Free With Videos",
  image: "https://i.imgur.com/CQq40fL.jpg",
  url: "https://prep-gis.vercel.app/",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta itemProp="image" content={metadata.image} />
        <meta itemProp="name" content={metadata.description} />
        <meta itemProp="description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="05cbf974-086d-4993-9f35-81934e68197e"
        />
      </head>
      <header className={styles.menuheader}>
        <ul className={styles.gridmenu}>
          <Link href="/">
            <li>🏠 Home</li>
          </Link>
          <Link href="/exam">
            <li>📃 Exam List</li>
          </Link>
        </ul>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <div className={styles.main}>
          <h3>
            Consider supporting this project at
            <br />
            <Link href="https://www.buymeacoffee.com/pvdzpmpbqJ">
              <span>BUY ME A COFFEE ☕</span>
            </Link>
          </h3>
          <div className={styles.gridicons}>
            <Link
              id="GitHub repository"
              href="https://github.com/andriusmv/prep-gis"
            >
              <p className={styles.gridicons}>
                <IconBrandGithub color="gray" />
              </p>
            </Link>
            <Link id="Twitter profile" href="https://twitter.com/amorenva">
              <p className={styles.gridicons}>
                <IconBrandTwitter color="gray" />
              </p>
            </Link>
            <Link
              id="Buy me a coffee"
              href="https://www.buymeacoffee.com/pvdzpmpbqJ"
            >
              <p className={styles.gridicons}>
                <IconCoffee color="gray" />
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
