import styled from 'styled-components';
import { animated } from "react-spring";

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled(animated.h1)`
  color: #212121;
`;
