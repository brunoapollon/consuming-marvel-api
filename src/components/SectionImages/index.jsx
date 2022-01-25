import React, { useEffect, useState } from "react";

import api from "../../services/api";

import CardImage from "../CardImage";
import ScrollContainer from "react-indiana-drag-scroll";

import { Container } from "./styles";

function SectionImages({ title, urlData, ...rest }) {
  const [dataImages, setDataImages] = useState([]);

  useEffect(() => {
    (async function requestApi() {
      await api.get(urlData).then((promise) => {
        const arrayFilter = promise.data.data.results.filter((characters) => {
          const urlImage = characters.thumbnail.path.split("/");
          const nameImage = urlImage[urlImage.length - 1];
          return (
            nameImage !== "image_not_available" &&
            characters.thumbnail.extension === "jpg"
          );
        });
        const arraySort = arrayFilter
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        setDataImages(arraySort);
      });
    })();
  }, [urlData]);

  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <ScrollContainer className="scroll-container">
        {dataImages.length !== 0 &&
          dataImages.map((element) => {
            return (
              <CardImage
                key={element.id}
                img={element.thumbnail.path + "." + element.thumbnail.extension}
                name={element.name}
                id_element={element.id}
                {...rest}
              />
            );
          })}
      </ScrollContainer>
    </Container>
  );
}

export default SectionImages;
