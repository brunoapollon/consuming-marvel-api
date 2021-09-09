import React from "react";

import { Container } from "./styles";

function CardImage(props) {
  const { img, name, idCharacter } = props;
  return (
    <Container {...props}>
      <a href={"/character/" + idCharacter}>
        <img src={img} alt="card" />
        <div className="name">{name}</div>
      </a>
    </Container>
  );
}

export default CardImage;
