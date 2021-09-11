import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

import { Container, Content } from "./styles";

import api from "../../services/api";

function CardAppearances(props) {
  let { resourceURI, name } = props;

  const [urlIMG, setUrlIMG] = useState();

  useEffect(() => {
    const timestamp = Number(new Date());
    const hash = CryptoJS.MD5(
      timestamp +
        process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
        process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
    );
    resourceURI += `?ts=${timestamp}&limit=100&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`;
    (function requestApi() {
      axios({
        baseURL: resourceURI,
      }).then((promise) => {
        const responseImageURL =
          promise.data.data.results[0].thumbnail.path +
          "." +
          promise.data.data.results[0].thumbnail.extension;
        setUrlIMG(responseImageURL);
      });
    })();
  }, [resourceURI]);
  console.log(urlIMG);
  return (
    <Container>
      <Content>
        <div className="bulr-backgroundImage" />
        {urlIMG && name && (
          <div className="thumb-img">
            <img src={urlIMG} alt="thumb-img" />
            <span>{name}</span>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default CardAppearances;
