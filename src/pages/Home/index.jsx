import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import api from "../../services/api";

import Header from "../../components/Header";
import SliderImages from "../../components/SliderImages";
import Footer from "../../components/Footer";
import SectionImages from "../../components/SectionImages";
import SectionEvents from "../../components/SectionEvents";

import { hash, timestamp } from "../../shared/queryValues";

import { Container, Content } from "./styles";

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlCharacters = `characters?ts=${timestamp}&orderBy=name&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`;
  const urlComics = `comics?ts=${timestamp}&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`;

  useEffect(() => {
    (async function requestApi() {
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
              {events.length !== 0 && (
                <SliderImages pages={[events[1], events[2], events[3]]} />
              )}
            </div>
            <SectionImages
              urlData={urlCharacters}
              nextPath="character"
              title="CHARACTERS"
            />
            <SectionEvents data={events} nextPath="event" title="EVENTS" />
            <SectionImages
              urlData={urlComics}
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
