import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  height: 100%;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > div {
    > p {
      text-align: justify;
      margin: 0;
      color: #fff;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
  }
`;
