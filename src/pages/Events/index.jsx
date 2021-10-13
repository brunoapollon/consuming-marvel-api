import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionAppearances from "../../components/SectionAppearances";
import ReactLoading from "react-loading";

import { Container, Content } from "./styles";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

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
          const arrayFilterByAlphabet = [];
          alphabet.forEach((letter) => {
            const dataEvents = arrayFilter.filter(
              (event) => event.title[0] === letter
            );
            if (dataEvents.length !== 0) arrayFilterByAlphabet.push(dataEvents);
          });
          setEvents(arrayFilterByAlphabet);
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
            <h1>EVENTS</h1>
            <div>
              <span>A - Z</span>
            </div>
          </section>
        )}
        {!loading &&
          events.length !== 0 &&
          events.map((eventsArray, index) => {
            return (
              <SectionAppearances
                key={index}
                data={eventsArray}
                title=""
                pathCard="event"
              />
            );
          })}
        {!loading && <Footer />}
      </Content>
    </Container>
  );
}

export default Events;
