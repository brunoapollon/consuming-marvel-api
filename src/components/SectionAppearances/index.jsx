import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import { Container } from "./styles";

import CardAppearances from "../CardAppearances";

function SectionAppearances(props) {
  const { data, title, pathCard } = props;
  console.log(data);
  return (
    <Container {...props}>
      {title !== "" && <h1>{title}</h1>}
      <ScrollContainer className="scroll-container">
        {data.length !== 0 &&
          data.map((element, index) => (
            <CardAppearances
              key={index}
              resourceURI={element.resourceURI}
              name={element.name ? element.name : element.title}
              url={pathCard + "/" + element.id}
              {...props}
            />
          ))}
      </ScrollContainer>
    </Container>
  );
}

export default SectionAppearances;
