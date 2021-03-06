import React from "react";

import { Container } from "./styles";

function CardImage(props) {
  const { img, name, id_element, nextPath } = props;
  return (
    <Container {...props}>
      <a href={`/${nextPath}/` + id_element}>
        <img src={img} alt="card" />
        <div className="name">{name}</div>
      </a>
    </Container>
  );
}

export default CardImage;
