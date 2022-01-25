import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionAppearances from "../../components/SectionAppearances";
import ReactLoading from "react-loading";

import { alphabet } from "../../shared/alphabet";

import { Container, Content } from "./styles";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

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
          `characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
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
          const arrayFilterByAlphabet = [];
          alphabet.forEach((letter) => {
            const dataComics = arrayFilter.filter(
              (comic) => comic.name[0] === letter
            );
            if (dataComics.length !== 0) arrayFilterByAlphabet.push(dataComics);
          });
          setCharacters(arrayFilterByAlphabet);
        });
    })();
    setLoading(false);
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
            <h1>CHARACTERS</h1>
            <div>
              <span>A - Z</span>
            </div>
          </section>
        )}
        {!loading &&
          characters.length !== 0 &&
          characters.map((charactersArray, index) => {
            return (
              <SectionAppearances
                key={index}
                data={charactersArray}
                title=""
                pathCard="character"
              />
            );
          })}
        {!loading && <Footer />}
      </Content>
    </Container>
  );
}

export default Characters;
