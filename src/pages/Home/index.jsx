import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import ReactLoading from "react-loading";

import api from "../../services/api";

import Header from "../../components/Header";
import SliderImages from "../../components/SliderImages";
import Footer from "../../components/Footer";
import SectionImages from "../../components/SectionImages";
import SectionEvents from "../../components/SectionEvents";

import { Container, Content } from "./styles";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [events, setEvents] = useState([]);
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
          const arraySort = arrayFilter
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
          setCharacters(arraySort);
        });

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
          const arraySort = arrayFilter
            .map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
          setComics(arraySort);
        });

      await api
        .get(
          `events?ts=${timestamp}&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
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
          setEvents(arraySort);
        });

      setLoading(false);
    })();
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
              {characters.length !== 0 && events.length !== 0 && (
                <SliderImages
                  pages={[
                    characters[0],
                    events[1],
                    events[2],
                    events[3],
                    characters[4],
                  ]}
                />
              )}
            </div>
            <SectionImages
              data={characters}
              nextPath="character"
              title="CHARACTERS"
            />
            <SectionEvents data={events} nextPath="event" title="EVENTS" />
            <SectionImages
              data={comics}
              nextPath="comic"
              title="COMICS"
              comics
            />
          </>
        )}
        {!loading && <Footer />}
      </Content>
    </Container>
  );
}

export default Home;
