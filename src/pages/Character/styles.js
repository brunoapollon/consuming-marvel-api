import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  .title-page {
    max-width: 790px;
    height: 135px;
    margin: 0 auto;
    background: #454545;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    > h1 {
      font-size: 100px;
      color: #fff;
    }
  }
`;
