import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionAppearances from "../../components/SectionAppearances";
import ReactLoading from "react-loading";

import { Container, Content } from "./styles";

function Home() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Container>
      <Content>
        <Header />
        {loading && (
          <div className="loading">
            <ReactLoading
              type="spin"
              color="#ed1d24"
              height={"20%"}
              width={"20%"}
            />
          </div>
        )}
        {!loading && (
          <section className="title">
            <h1>COMICS</h1>
            <div>
              <span>A - Z</span>
            </div>
          </section>
        )}
        {!loading &&
          comics.length !== 0 &&
          alphabet.map((letter, index) => {
            const dataComics = comics.filter(
              (comic) => comic.title[0] === letter
            );
            return dataComics.length !== 0 ? (
              <div className="section-cards">
                <SectionAppearances
                  key={index}
                  data={dataComics}
                  title=""
                  pathCard="comic"
                />
              </div>
            ) : (
              ""
            );
          })}
        {!loading && <Footer />}
      </Content>
    </Container>
  );
}

export default Home;
