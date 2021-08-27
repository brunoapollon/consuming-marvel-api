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
    height: 400px;
    margin-bottom: 50px;
  }
  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
