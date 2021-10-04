import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > div {
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    > p {
      text-align: justify;
      color: #fff;
    }
  }
  .footer {
    width: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0;
  }
`;
