import { useSpring, animated } from "react-spring";
import styles from '../styles/Home.module.css';

export default function Home() {
  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      tension: 240,
      friction: 64,
    }
  });

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <animated.h1 style={style}>Hello World</animated.h1>
      </div>
    </div>
  )
}
