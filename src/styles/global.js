import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body{
    background-color:#171616;
    overflow: auto;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ed1d24;
      border-radius: 10px;
    }
  }
  h1,h2,h3,h4,h5, span, input, a, button{
    font-family: 'Roboto', serif;
  }
`;
