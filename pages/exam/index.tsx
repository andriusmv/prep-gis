import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import supabase from '@/utils/supabase'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

interface ExamProps {
  exam: {id: string; title: string; description: string; video_url: string}[];
}

export default function Home({ exam }: ExamProps) {
  return (
    <>
      <Head>
        <title>GIS Exam Study Prep | Exams List</title>
        <meta name="description" content="GIS Exam Study Prep | Exam List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <p>If you don't see the exam you're looking for... let us know! 📧</p>
          <h1>Exam List</h1>
          <h3>Pick one certification exam</h3>
        <div className={styles.grid}>
          {exam.map((exam: {
                id: string;
                title: string; 
                video_url: string;}) => (
                <Link key={exam.id} href={`/exam/${exam.id}`} className={styles.card}>{exam.title}</Link>
            ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: exam } = await supabase.from("exam").select("*")
  
  return {
      props: {
        exam,
      },
  };
};