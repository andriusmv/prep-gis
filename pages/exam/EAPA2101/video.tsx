import styles from '@/styles/Home.module.css'
import supabase from '@/utils/supabase'
import { GetStaticProps } from 'next'
import Link from 'next/link';

interface ExamProps {
    video: {id: string; title: string; embed: string; video_url: string}[];
}

export default function Video({ video }: ExamProps) {
  return (
    <>
      <div className={styles.sidebar}>
        <aside className={styles.sidebar__sidebar}>
          <h3 className={styles.main}>🧛 Watch them all 👇📚</h3>
        <ul className={styles.mainvideo}>
          {video.map((video: {
                id: string;
                title: string; 
                video_url: string;}) => (
                <li key={video.id}>
                <Link href={`/exam/EAPA2101/video#${video.id}`} className={styles.container}>{video.title}</Link>
                </li>
                ))}
        </ul>
        </aside>
      <main className={styles.sidebar__main}>
      {video.map((video: {
                id: string;
                title: string; 
                embed: string;
                video_url: string;}) => (
        <div key={video.id} className={styles.main} id={video.id}>
            <h2 className={styles.main}>{video.title}</h2>
      <div className={styles.videocontainer}>
          <iframe className={styles.video} src={`https://www.youtube.com/embed/${video.embed}`} width="500" height="281,25"/>
          </div>
          </div>
                ))}
      </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: video } = await supabase.from("video").select().or('tag.cs.{EAPA2101}');
  
  return {
      props: {
        video,
      },
  };
};