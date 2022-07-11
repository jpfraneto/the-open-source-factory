import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Open Source Factory</title>
        <meta name='description' content='Serving One Audience Every Month' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>THE OPEN SOURCE FACTORY</h2>
        <h5 className={styles.subtitle}>
          Bootcamping, reimagined: We learn by{' '}
          <span className={styles.rainbowText}>BUILDING</span>.
        </h5>

        {/* <ul className={styles.links}>
          <Link href='about'>
            <a>About</a>
          </Link>
          <Link href='/docs'>
            <a>Docs</a>
          </Link>
          <Link href='/podcast'>
            <a>Podcast</a>
          </Link>
          <Link href='/apply'>
            <a>Apply</a>
          </Link>
          <Link href='/ideas'>
            <a>Ideas</a>
          </Link>
          <Link href='/tools'>
            <a>Tools</a>
          </Link>
        </ul> */}
      </main>
    </div>
  );
}
