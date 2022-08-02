import { AppContainer, Container, Heading } from "../styles/Home.styled";
import { useSpring } from "react-spring";

export default function Home() {
  const styles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      mass: 272,
      friction: 48
    }
  });

  return (
    <AppContainer>
      <Container>
        <Heading style={styles}>Hello World</Heading>
      </Container>
    </AppContainer>
  )
}
