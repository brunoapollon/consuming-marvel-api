import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import CardImage from "../CardImage";

import { Container, Content } from "./styles";

function SectionEvents(props) {
  const { title, data } = props;
  return (
    <Container>
      <h1>{title}</h1>
      <Content>
        <ScrollContainer className="scroll-container">
          {data.length !== 0 &&
            data.map((event) => {
              return (
                <CardImage
                  img={event.thumbnail.path + "." + event.thumbnail.extension}
                  id_element={event.id}
                  {...props}
                />
              );
            })}
        </ScrollContainer>
      </Content>
    </Container>
  );
}

export default SectionEvents;
