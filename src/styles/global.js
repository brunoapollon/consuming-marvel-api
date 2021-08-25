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
  }
  h1,h2,h3,h4,h5, span, input, a, button{
    font-family: 'Roboto', serif;
  }
`;
