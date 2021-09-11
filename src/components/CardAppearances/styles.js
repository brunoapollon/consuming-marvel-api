import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  .bulr-backgroundImage {
    width: 100%;
    height: 100%;
    position: fixed;
    border-radius: 10px;
    background: #4f4a4a;
    filter: blur(5px);
    position: absolute;
  }
`;

export const Content = styled.div`
  > div {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > span {
      margin-top: 20px;
      color: #fff;
      font-size: 12x;
      font-weight: 300;
    }
  }
  img {
    margin-top: 30px;
    width: 200px;
    height: 300px;
  }
`;
