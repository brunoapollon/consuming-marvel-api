import React, { useEffect, useState, useRef } from "react";

import CryptoJS from "crypto-js";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionAppearances from "../../components/SectionAppearances";

import api from "../../services/api";

import { Container, Content } from "./styles";

function Event(props) {
  const { event_id } = props.match.params;

  const [event, setEvent] = useState();
  const [urlImage, setUrlImage] = useState();
  const [characters, setCharacters] = useState();

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
          `events/${event_id}?ts=${timestamp}&orderBy=name&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
        )
        .then((promise) => {
          console.log(promise.data.data.results[0]);
          setEvent(promise.data.data.results[0]);
          setUrlImage(
            promise.data.data.results[0].thumbnail.path +
              "." +
              promise.data.data.results[0].thumbnail.extension
          );
          setCharacters(promise.data.data.results[0].characters.items);
        });
    })();
  }, [event_id]);
  return (
    <Container>
      {event && urlImage && (
        <Content backgroundImage={urlImage}>
          <Header />
          <div className="title-page">
            <h1>EVENT</h1>
          </div>
          <div className="cover-page">
            <img src={urlImage} alt="cover" />
            <div>
              <h3>{event.title}</h3>
            </div>
          </div>
          <div className="after-cover">
            <p>{event.description}</p>
            <h1>DETAILS</h1>
            {characters && (
              <SectionAppearances
                data={characters}
                title="characters"
                className="section-characters"
              />
            )}
            <Footer />
          </div>
        </Content>
      )}
    </Container>
  );
}

export default Event;
