import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  height: 100%;
  box-sizing: border-box;
  .slide-show {
    max-width: 1024px;
    margin: 0 auto;
    height: 600px;
    margin-bottom: 50px;
  }
  .characters {
    padding-bottom: 50px;
    .title-section {
      font-family: "Montserrat", sans-serif;
      font-size: 60px;
      color: #fff;
      margin-left: 50px;
    }
    .allCharactersResponse {
      display: flex;
      overflow: auto;
      margin: 0 50px 0;
      &::-webkit-scrollbar {
        display: none;
      }
      > img {
        max-width: 200px;
        width: auto;
        height: auto;
        background-size: cover;
        -webkit-mask-image: linear-gradient(to top, transparent 0, black 50%);
        & + img {
          margin-left: 100px;
        }
      }
    }
  }
`;
