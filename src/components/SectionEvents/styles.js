import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 200px;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    color: #fff;
    margin-left: 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #ed1d24;
  padding: 140px 0;
  .scroll-container {
    display: flex;
    height: 500px;
    margin-left: 50px;
    img {
      height: 100%;
      width: 580px;
      object-fit: cover;
      -webkit-mask-image: none;
      mask-image: none;
      border-radius: 0;
    }
  }
`;
