import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import supabase from '@/utils/supabase'
import { GetStaticProps } from 'next'
import Link from 'next/link';

interface ExamProps {
    video: {id: string; title: string; tag: string; video_url: string}[];
}

export default function Home({ video }: ExamProps) {
  return (
    <>
      <Head>
        <title>Certified Photogrammetric Technologist exam</title>
        <meta name="description" content="Certified Photogrammetric Technologist exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <p>Currently showing curated videos for</p>
          <h1>Certified Photogrammetric Technologist</h1>
          <h3>🔎 Simply click on the video of your choice</h3>
        <div className={styles.grid}>
          {video.map((video: {
                id: string;
                title: string; 
                video_url: string;}) => (
                <Link key={video.id} href={`/exam/ASPRS-PT-T/video#${video.id}`} className={styles.card}>{video.title}</Link>
            ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: video } = await supabase.from("video").select().or('tag.cs.{ASPRS-PT-T}');
  
  return {
      props: {
        video,
      },
  };
};