import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

import { Container, Content } from "./styles";

function CardAppearances(props) {
  const { resourceURI, name } = props;

  const refURL = useRef(resourceURI);

  const [urlIMG, setUrlIMG] = useState();

  useEffect(() => {
    const timestamp = Number(new Date());
    const hash = CryptoJS.MD5(
      timestamp +
        process.env.REACT_APP_KEY_PRIVATE_MARVEL_API +
        process.env.REACT_APP_KEY_PUBLIC_MARVEL_API
    );
    refURL.current += `?ts=${timestamp}&apikey=${process.env.REACT_APP_KEY_PUBLIC_MARVEL_API}&hash=${hash}`;
    (async function requestApi() {
      await axios({
        baseURL: refURL.current,
      }).then((promise) => {
        const responseImageURL =
          promise.data.data.results[0].thumbnail.path +
          "." +
          promise.data.data.results[0].thumbnail.extension;
        setUrlIMG(responseImageURL);
      });
    })();
  }, []);
  return (
    <Container {...props}>
      <Content {...props}>
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
