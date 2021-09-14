import React from "react";

import CardImage from "../CardImage";
import ScrollContainer from "react-indiana-drag-scroll";

import { Container } from "./styles";

function SectionImages(props) {
  const dataImages = props.data;
  return (
    <Container>
      <h1>{props.title}</h1>
      <ScrollContainer className="scroll-container">
        {dataImages.length !== 0 &&
          dataImages.map((element) => {
            return (
              <CardImage
                img={element.thumbnail.path + "." + element.thumbnail.extension}
                name={element.name}
                id_element={element.id}
                {...props}
              />
            );
          })}
      </ScrollContainer>
    </Container>
  );
}

export default SectionImages;
