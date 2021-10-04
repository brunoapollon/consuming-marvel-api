import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
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
    box-shadow: 2px 2px 2px #fff;
    > h1 {
      font-size: 100px;
      color: #fff;
    }
  }

  .cover-page {
    height: 490px;
    margin-left: inherit;
    margin-right: inherit;
    margin-top: 180px;
    position: absolute;
    left: 0;
    right: 0;
    > img {
      height: 490px;
      width: 100%;
      object-fit: cover;
    }
    > div {
      background: #ed1d24;
      width: 750px;
      max-width: 750px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
    > div,
    h3 {
      color: #fff;
      font-size: 72px;
      font-weight: bold;
      margin: 0;
    }
  }
  .after-cover {
    margin-top: calc(180px + 490px + 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p {
      color: #fff;
      font-size: 24px;
      text-align: justify;
      margin-left: 100px;
      margin-right: 100px;
    }
    > h1 {
      font-size: 72px;
      color: #fff;
    }
    > a {
      align-self: flex-end;
      margin-right: 100px;
      text-decoration: none;
      color: #fff;
    }
    .section-characters {
      > h1 {
        color: #fff;
        font-size: 64px;
      }
    }
    .next-event {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 200px;
      > h3 {
        color: #fff;
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 715px) {
    .title-page {
      max-width: 200px;
      height: 80px;
      > h1 {
        font-size: 32px;
      }
    }
  }
  .cover-page {
    > div {
      background: #ed1d24;
      max-width: 300px;
    }
    > div,
    h3 {
      font-size: 32px;
    }
  }
  .after-cover {
    > p {
      font-size: 24px;
      text-align: justify;
      margin: 0 auto;
    }
    > h1 {
      font-size: 64px;
    }
    .section-characters {
      > h1 {
        color: #fff;
        font-size: 32px;
      }
    }
    .next-event {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 200px;
      > h3 {
        color: #fff;
        margin-right: 10px;
      }
    }
  }
`;
