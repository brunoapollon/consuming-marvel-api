import React from "react";

import { Container } from "./styles";

function CardImage(props) {
  return (
    <Container>
      <a href="a">
        <img src={props.img} alt="card" />
      </a>
    </Container>
  );
}

export default CardImage;
