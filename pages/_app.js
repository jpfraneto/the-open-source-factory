import '../styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Component {...pageProps} />
      {/* <nav>
        <span className='bottomNav' onClick={() => router.back()}>
          Go Back
        </span>
      </nav> */}
    </>
  );
}

export default MyApp;
