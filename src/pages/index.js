import Head from 'next/head';
import { useSpring, useTransition, useChain, useSpringRef, a } from "react-spring";
import styles from '../styles/Home.module.scss';

export default function Home() {
  const links = [
    {
      text: "linkedin",
      icon: "",
      url: "https://www.linkedin.com/in/levi-zustiak/",
    },
    {
      text: "github",
      icon: "",
      url: "https://www.github.com/levi-zustiak",
    },
    {
      text: 'resume',
      icon: "",
      url: "https://www.levizustiak.dev/resume"
    }
  ];

  const headerRef = useSpringRef();
  const linkRef = useSpringRef();

  const headerAnimation = useSpring({
    ref: headerRef,
    from: { opacity: 0, y: 16 },
    to: { opacity: 1, y: 0 },
    config: {
      tension: 100,
    },
  });

  const linkTransition = useTransition(links, {
    ref: linkRef,
    trail: 250,
    from: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0 },
  })

  useChain([headerRef, linkRef], [0, 0.25]);

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
        <a.h1 style={headerAnimation}>Hello World</a.h1>
        <div className={styles.linkContainer}>
          {linkTransition((style, link) => (
            <a.a className={styles[link.text]} style={style} href={link.url}>{link.text}</a.a>
          ))}
        </div>
      </div>
    </div>
  )
}
