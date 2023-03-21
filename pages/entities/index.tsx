import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import supabase from '@/utils/supabase';

interface EntityProps {
    entity: {id: string; name: string; entity_url: string}[];
}

export default function EntityList({ entity }: EntityProps) {
  return (
    <>
      <Head>
        <title>GIS Certification Entities</title>
        <meta name="description" content="GIS certification entities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <p>Currently showing entities that provide GIS certification exams</p>
          <h1>Entities List</h1>
          <h3>🔎 Click on each entity to go to their website</h3>
        <div className={styles.grid}>
          {entity.map((entity: {
                id: string;
                name: string; 
                entity_url: string;}) => (
                <Link key={entity.id} href={`${entity.entity_url}`} className={styles.card}>{entity.name}</Link>
            ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: entity } = await supabase.from("entity").select("*");
  
  return {
      props: {
        entity,
      },
  };
};