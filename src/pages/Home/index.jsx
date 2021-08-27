import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import ReactLoading from "react-loading";
import ScrollContainer from "react-indiana-drag-scroll";

import api from "../../services/api";

import Header from "../../components/Header";
import SliderImages from "../../components/SliderImages";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

function Home() {
  const [imagesCharacters, setImagesCharacters] = useState([]);
  const [imagesComics, setImagesComics] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timestamp = Number(new Date());
    const hash = CryptoJS.MD5(
      timestamp +
        process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
        process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
    );
    api
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
        const arraySort = arrayFilter
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        setImagesCharacters(arraySort);
      });
    api
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
        const arraySort = arrayFilter
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        setImagesComics(arraySort);
      });
    setTimeout(() => [setLoading(false)], 2000);
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
          <>
            <div className="slide-show">
              {imagesCharacters.length !== 0 && (
                <SliderImages>
                  <div class="container-slider">
                    <input type="radio" name="slider" id="item-1" checked />
                    <input type="radio" name="slider" id="item-2" />
                    <input type="radio" name="slider" id="item-3" />
                    <div class="cards">
                      <label class="card" for="item-1" id="song-1">
                        <img
                          src={
                            imagesCharacters[0].thumbnail.path +
                            "." +
                            imagesCharacters[0].thumbnail.extension
                          }
                          alt="song"
                        />
                      </label>
                      <label class="card" for="item-2" id="song-2">
                        <img
                          src={
                            imagesCharacters[1].thumbnail.path +
                            "." +
                            imagesCharacters[1].thumbnail.extension
                          }
                          alt="song"
                        />
                      </label>
                      <label class="card" for="item-3" id="song-3">
                        <img
                          src={
                            imagesCharacters[2].thumbnail.path +
                            "." +
                            imagesCharacters[2].thumbnail.extension
                          }
                          alt="song"
                        />
                      </label>
                    </div>
                    <div className="dots">
                      <div className="dot-item-1" />
                      <div className="dot-item-2" />
                      <div className="dot-item-3" />
                    </div>
                  </div>
                </SliderImages>
              )}
            </div>
            <section className="characters">
              <h1 className="title-section">CHARACTERS</h1>
              <ScrollContainer className="allCharactersResponse scroll-container">
                {imagesCharacters.length !== 0 &&
                  imagesCharacters.map((characters) => {
                    return (
                      <div className="img-character">
                        <img
                          src={
                            characters.thumbnail.path +
                            "." +
                            characters.thumbnail.extension
                          }
                          alt="song"
                        />
                      </div>
                    );
                  })}
              </ScrollContainer>
            </section>
            <section className="characters">
              <h1 className="title-section">COMICS</h1>
              <ScrollContainer className="allCharactersResponse scroll-container">
                {imagesComics.length !== 0 &&
                  imagesComics.map((comics) => {
                    return (
                      <div className="img-character">
                        <img
                          src={
                            comics.thumbnail.path +
                            "." +
                            comics.thumbnail.extension
                          }
                          alt="song"
                        />
                      </div>
                    );
                  })}
              </ScrollContainer>
            </section>
          </>
        )}
        {!loading && <Footer />}
      </Content>
    </Container>
  );
}

export default Home;
