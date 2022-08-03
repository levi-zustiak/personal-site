import { useSpring, animated } from "react-spring";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      tension: 100,
      friction: 64,
    }
  });

  return (
    <div className={styles.app}>
    <Head>
      <link rel="icon" href="/favicon.svg"/>
      <title>Levi Zustiak</title>
      <meta name="description" content="Hi! I'm Levi Zustiak. A software engineer based in the midwestern United States. Feel free to stop by and say hello!"/>
      <meta name="author" content="Levi Zustiak"/>
      <meta name="keywords" content="software engineer, software developer, portfolio, react, javascript, web app"/>
    </Head>
      <div className={styles.container}>
        <animated.h1 style={style}>Hello World</animated.h1>
      </div>
    </div>
  )
}
