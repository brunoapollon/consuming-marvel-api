import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    > h1 {
      font-size: 100px;
      color: #fff;
      margin: 0;
    }
    > div {
      width: 455px;
      height: 80px;
      background-color: #ed1d24;
      border-radius: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      > span {
        font-size: 56px;
        color: #fff;
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
  .section-cards {
    width: 100%;
    height: max-content;
    overflow: hidden;
    padding-left: 50px;
    margin-bottom: 200px;
  }
  @media (max-width: 1024px) {
    .title {
      > h1 {
        font-size: 30px;
        color: #fff;
        margin: 0;
      }
      > div {
        width: 224px;
        height: 40px;
        > span {
          font-size: 24px;
          color: #fff;
        }
      }
    }
    .section-cards {
      margin-bottom: 100px;
    }
  }
`;
