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
    height: 280px;
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
      /* &::-webkit-scrollbar {
        display: none;
      } */
      .img-character {
        height: 300px;
        > img {
          width: 200px;
          height: 100%;
          -webkit-mask-image: linear-gradient(to top, transparent 0, black 50%);
          mask-image: linear-gradient(to top, transparent 0, black 50%);
        }
        & + div {
          margin-left: 50px;
        }
      }
    }
  }
  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
