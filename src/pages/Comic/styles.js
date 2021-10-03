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
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

export const Image = styled.img`
  width: 600px;
  margin: 20px 0;
`;

export const Description = styled.div`
  width: 600px;
  > p {
    color: #fff;
    font-size: 16px;
    text-align: justify;
  }
`;

export const Table = styled.table`
  width: 600px;
  color: #fff;
  margin-bottom: 200px;
  th {
    height: 50px;
    width: 50%;
    cursor: default;
    &:hover {
      color: #4f4a4a;
      text-transform: uppercase;
      font-size: 24px;
    }
  }
  .tag {
    > th {
      font-size: 56px;
      &:hover {
        color: #fff;
        text-transform: none;
        font-size: 56px;
      }
    }
  }
`;
