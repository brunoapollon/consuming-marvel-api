import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

import { Container, Content } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";

function Character(props) {
  const [character, setCharacter] = useState();

  const { character_id } = props.match.params;

  useEffect(() => {
    (function requestApi() {
      const timestamp = Number(new Date());
      const hash = CryptoJS.MD5(
        timestamp +
          process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
          process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
      );
      api
        .get(
          `characters/${character_id}?ts=${timestamp}&orderBy=name&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
        )
        .then((promise) => {
          setCharacter(promise.data.data.results[0]);
        });
    })();
  }, [character_id]);
  console.log(character);
  return (
    <Container>
      <Content>
        <Header />
        <div className="title-page">
          <h1>CHARACTER</h1>
        </div>
        <section className="card-character">
          {character && (
            <>
              <h1>Hi, I'm {character.name}</h1>
              <img
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt="character"
              />
              <p>{character.description}</p>
            </>
          )}
        </section>
      </Content>
    </Container>
  );
}

export default Character;
