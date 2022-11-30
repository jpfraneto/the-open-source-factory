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

      <main>
        <section className={styles.main}>
          <h2 className={styles.title}>THE OPEN SOURCE FACTORY</h2>
          <h5 className={styles.subtitle}>
            Bootcamping, reimagined: We learn by{' '}
            <span className={styles.rainbowText}>BUILDING</span> IN TEAMS.
          </h5>
          <div className={styles.btnscontainer}>
            {' '}
            <a
              href='https://cryptic-hollows-96549.herokuapp.com/'
              target='_blank'
              rel='noreferrer'
              className={styles.learnMoreBtn}
            >
              First iteration
            </a>
          </div>
        </section>
        <section className={styles.secondSection}></section>
      </main>
    </div>
  );
}
