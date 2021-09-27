import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";
import SectionAppearances from "../../components/SectionAppearances";

import { Container, Content } from "./styles";

function Home() {
  const [comics, setComics] = useState([]);

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

  useEffect(() => {
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
          setComics(arrayFilter);
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
        {comics.length !== 0 &&
          alphabet.map((letter, index) => {
            const dataComics = comics.filter(
              (comic) => comic.title[0] === letter
            );
            return dataComics.length !== 0 ? (
              <SectionAppearances key={index} data={dataComics} title="" />
            ) : (
              ""
            );
          })}
      </Content>
    </Container>
  );
}

export default Home;
