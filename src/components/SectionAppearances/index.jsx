import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { Container } from "./styles";

import CardAppearances from "../CardAppearances";

function SectionAppearances(props) {
  const { data, title } = props;

  return (
    <Container {...props}>
      <h1>{title}</h1>
      <ScrollContainer className="scroll-container">
        {data.map((element, index) => (
          <CardAppearances
            key={index}
            resourceURI={element.resourceURI}
            name={element.name}
            {...props}
          />
        ))}
      </ScrollContainer>
    </Container>
  );
}

export default SectionAppearances;
