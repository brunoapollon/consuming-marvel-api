import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import api from "../../services/api";

import { Container, Content, Title, Image, Description, Table } from "./styles";

function Comic(props) {
  const { comic_id } = props.match.params;
  const [comic, setComic] = useState();

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
          `comics/${comic_id}?ts=${timestamp}&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`
        )
        .then((promise) => {
          setComic(promise.data.data.results[0]);
        });
    })();
  }, [comic_id]);

  console.log(comic);
  return (
    <Container>
      <Content>
        <Header />
        {comic && (
          <>
            <Title>{comic.title}</Title>
            <Image
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt="thumbnail"
            />
            {comic.description && (
              <Description>
                <p>comic.description</p>
              </Description>
            )}
            <Table>
              <tbody>
                <tr className="tag">
                  <th>Name</th>
                  <th>Role</th>
                </tr>
                {comic.creators.items.map((element, index) => (
                  <tr key={index}>
                    <th>{element.name}</th>
                    <th>{element.role}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}

        <Footer />
      </Content>
    </Container>
  );
}

export default Comic;
