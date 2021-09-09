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
          dataImages.map((image) => {
            return (
              <CardImage
                img={image.thumbnail.path + "." + image.thumbnail.extension}
                name={image.name}
                idCharacter={image.id}
                {...props}
              />
            );
          })}
      </ScrollContainer>
    </Container>
  );
}

export default SectionImages;
