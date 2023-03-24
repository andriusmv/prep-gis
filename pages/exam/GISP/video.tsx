import styles from '@/styles/Home.module.css'
import supabase from '@/utils/supabase'
import { IconBrandYoutube } from '@tabler/icons-react';
import { GetStaticProps } from 'next'
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';

interface ExamProps {
    video: {id: string; title: string; embed: string; video_url: string; duration: string}[];
}

export default function Video({ video }: ExamProps) {
  return (
    <>
      <div className={styles.sidebar}>
        <aside className={styles.sidebar__sidebar}>
        <div className={styles.main}>
          <p className={styles.sidebar}>GISCI Geospatial Core Technical Knowledge Exam</p>
          <p className={styles.sidebar}><span>GISP exam</span></p>
          <br />
          <h3 className={styles.sidebar}>🧛 Watch them all 👇📚</h3>
          </div>
        <ul className={styles.mainvideo}>
          {video.map((video: {
                id: string;
                title: string; 
                video_url: string;
                duration: string;}) => (
                <li key={video.id} className={styles.sidebarmain}>
                <Link href={`/exam/GISP/video#${video.id}`}>
                {video.title}</Link>
                {/* <p className={styles.sidebarmain}>{video.duration} <IconBrandYoutube color='red' size={15}/></p> */}
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
            <h2 className={styles.sidebar}>{video.title}</h2>
          <ReactPlayer url={video.video_url} className={styles.videoyoutube} />
      {/* <div className={styles.videocontainer}>
          <iframe className={styles.video} src={`https://www.youtube.com/embed/${video.embed}`} width="500" height="281,25"/>
          </div> */}
          </div>
                ))}
      </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: video } = await supabase.from("video").select().or('tag.cs.{GISP}');
  
  return {
      props: {
        video,
      },
  };
};