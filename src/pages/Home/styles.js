import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  .slide-show {
    position: relative;
    max-width: 1024px;
    overflow: hidden;
    margin: 0 auto;
    height: 600px;
    margin-bottom: 200px;
  }
  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    .slide-show {
      max-width: 612px;
      height: 600px;
      margin-bottom: 100px;
    }
  }
  @media (max-width: 612px) {
    .slide-show {
      max-width: 306px;
      height: 200px;
      margin-bottom: 50px;
    }
  }
`;
