import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  position: absolute;
  max-width: 1024px;
  width: 1024px;
  max-height: 500px;
  height: 500px;
  will-change: transform;
  user-select: none;
`;

export const Content = styled(animated.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  will-change: transform;
`;
