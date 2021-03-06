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
            <span className={styles.rainbowText}>BUILDING</span>.
          </h5>
          <div className={styles.btnscontainer}>
            {' '}
            <a
              href='https://www.jpfraneto.com/#portfolio'
              target='_blank'
              rel='noreferrer'
              className={styles.learnMoreBtn}
            >
              Old projects
            </a>
            <a
              href='https://calendly.com/jpfraneto/the-open-source-factory?back=1&month=2022-07'
              target='_blank'
              rel='noreferrer'
              className={styles.learnMoreBtn}
            >
              Learn More...
            </a>
            <a
              href='https://open.spotify.com/show/2nJcByumPsLWVYqdEwcPUA?si=742b405a76e249bc'
              target='_blank'
              rel='noreferrer'
              className={styles.learnMoreBtn}
            >
              Into Tech Podcast
            </a>
          </div>
          <div className={styles.building}>
            <p>
              This cycle:{' '}
              <Link href='/spreadit'>
                <a className={styles.spreaditBtn}>www.spreadit.pro</a>
              </Link>
            </p>
            <span>Shipping date: 11 August, 09:35 pm Eastern Time </span>
          </div>
        </section>
        <section className={styles.secondSection}></section>
      </main>
    </div>
  );
}
