import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    height: 100vh;
  }
  body{
    background-color:#171616;
    margin: 0;
    padding: 0;
    height: 100vh;
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
