import React, { useRef } from "react";
import clamp from "lodash-es/clamp";
import { useSprings } from "react-spring";
import { useGesture } from "react-use-gesture";

import { Container, Content } from "./styles";

function SliderImages(props) {
  const { pages } = props;
  const index = useRef(0);
  const [properties, set] = useSprings(pages.length, (i) => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block",
  }));
  const bind = useGesture(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 2)
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
      set((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
  return properties.map(({ x, display, sc }, i) => (
    <Container
      {...bind()}
      key={i}
      style={{
        display,
        transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
      }}
    >
      <Content
        style={{
          transform: sc.interpolate((s) => `scale(${s})`),
          backgroundImage: `url(${
            pages[i].thumbnail.path + "." + pages[i].thumbnail.extension
          })`,
        }}
      />
    </Container>
  ));
}

export default SliderImages;
