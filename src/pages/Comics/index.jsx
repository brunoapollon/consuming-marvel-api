import React, { useEffect, useState, useCallback } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";

import { Container, Content } from "./styles";

function Home() {
  const [comics, setComics] = useState([]);

  const filterIorder = useCallback(
    (comicsArray, letter) => {
      const arrayByLetter = comicsArray.filter(
        (comicElement) => comicElement.title[0] === letter
      );
      if (arrayByLetter.length !== 0) setComics([...comics, arrayByLetter]);
      console.log(comics);
    },
    [comics]
  );

  useEffect(() => {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    (async function requestApi() {
      const timestamp = Number(new Date());
      const hash = CryptoJS.MD5(
        timestamp +
          process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
          process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
      );
      await api
        .get(
          `comics?ts=${timestamp}&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
        )
        .then((promise) => {
          const arrayFilter = promise.data.data.results.filter((characters) => {
            const urlImage = characters.thumbnail.path.split("/");
            const nameImage = urlImage[urlImage.length - 1];
            return (
              nameImage !== "image_not_available" &&
              characters.thumbnail.extension === "jpg"
            );
          });
          alphabet.forEach((letterElement) => {
            filterIorder(arrayFilter, letterElement);
          });
        });
    })();
  }, []);
  return (
    <Container>
      <Content>
        <Header />
        <section className="title">
          <h1>COMICS</h1>
          <div>
            <span>A - Z</span>
          </div>
        </section>
      </Content>
    </Container>
  );
}

export default Home;
