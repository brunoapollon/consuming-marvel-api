import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import ReactLoading from "react-loading";

import { Container, Content } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionAppearances from "../../components/SectionAppearances";

function Character(props) {
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState();
  const [events, setEvents] = useState();
  const [series, setSeries] = useState();
  const [stories, setStories] = useState();
  const [loading, setLoading] = useState(true);

  const { character_id } = props.match.params;

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
          `characters/${character_id}?ts=${timestamp}&orderBy=name&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
        )
        .then((promise) => {
          setCharacter(promise.data.data.results[0]);
          setComics(promise.data.data.results[0].comics.items);
          setEvents(promise.data.data.results[0].events.items);
          setSeries(promise.data.data.results[0].series.items);
          setStories(promise.data.data.results[0].stories.items);
        });
    })();
  }, [character_id]);
  setInterval(() => {
    setLoading(false);
  }, 5000);
  return (
    <Container>
      <Content>
        <Header />
        {!loading && (
          <>
            <div className="title-page">
              <h1>CHARACTER</h1>
            </div>
            <section className="card-character">
              {character && (
                <>
                  <h1>Hi, I'm {character.name}</h1>
                  <div className="about-character">
                    <img
                      src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                      alt="character"
                    />
                    <section className="description">
                      <h1>DESCRIPTION</h1>
                      <p>{character.description}</p>
                    </section>
                  </div>
                </>
              )}
            </section>
            <section className="pops-up">
              <h1>POPS UP</h1>
              {comics && events && series && stories && (
                <>
                  <SectionAppearances data={comics} title="in the comics" />
                  <SectionAppearances
                    data={events}
                    title="in the events"
                    plus
                  />
                  <SectionAppearances
                    data={series}
                    title="in the stories"
                    plus
                  />
                </>
              )}
            </section>
          </>
        )}
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
      </Content>
      {!loading && <Footer />}
    </Container>
  );
}

export default Character;
