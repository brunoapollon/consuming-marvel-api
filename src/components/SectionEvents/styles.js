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
  @media (max-width: 1024px) {
    margin-bottom: 100px;

    h1 {
      font-size: 24px;
    }
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
  @media (max-width: 1024px) {
    padding: 70px 0;
    .scroll-container {
      height: 300px;
      img {
        height: 100%;
        width: 290px;
      }
    }
  }
`;
