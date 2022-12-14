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
      url: "./Resume.pdf"
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
      <div className={styles.container}>
        <a.h1 style={headerAnimation}>Hello World</a.h1>
        <div className={styles.linkContainer}>
          {linkTransition((style, link) => (
            <a.a className={styles[link.text]} style={style} href={link.url} target="_blank" rel="noreferrer noopener">{link.text}</a.a>
          ))}
        </div>
      </div>
    </div>
  )
}
