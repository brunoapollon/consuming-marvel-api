import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  html{
    height: 100vh;
    overflow-x: hidden;
  }
  body{
    background-color:#171616;
    margin: 0;
    padding: 0;
    padding-top: 80px;
    height: 100vh;
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ed1d24;
      border: 1px solid #fff;
      border-radius: 10px;
    }
  }
  h1,h2,h3,h4,h5, p, span, input, a, button, table{
    font-family: 'Montserrat', serif;
  }
`;
