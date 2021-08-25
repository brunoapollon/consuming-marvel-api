import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";
import SliderImages from "../../components/SliderImages";

import { Container, Content } from "./styles";

function Home() {
  const [imagesCharacters, setImagesCharacters] = useState([]);
  useEffect(() => {
    const timestamp = Number(new Date());
    const hash = CryptoJS.MD5(
      timestamp +
        process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
        process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
    );
    api
      .get(
        `characters?ts=${timestamp}&orderBy=name&limit=20&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
      )
      .then((promise) => {
        const arrayFilter = promise.data.data.results.filter((characters) => {
          const urlImage = characters.thumbnail.path.split("/");
          const nameImage = urlImage[urlImage.length - 1];
          return nameImage !== "image_not_available";
        });
        const arraySort = arrayFilter
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value);
        setImagesCharacters(arraySort);
      });
  }, []);
  return (
    <Container>
      <Content>
        <Header />
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
          <div className="allCharactersResponse dragscroll">
            {imagesCharacters.length !== 0 &&
              imagesCharacters.map((characters) => {
                return (
                  <img
                    src={
                      characters.thumbnail.path +
                      "." +
                      characters.thumbnail.extension
                    }
                    alt="song"
                  />
                );
              })}
          </div>
        </section>
      </Content>
    </Container>
  );
}

export default Home;
