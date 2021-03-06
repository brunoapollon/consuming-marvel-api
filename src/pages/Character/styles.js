import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 72px;
    color: #fff;
  }
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
    }
  }
  .about-character {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 200px;
    > img {
      width: 500px;
      height: 400px;
      object-fit: cover;
      margin-right: 30px;
      border-radius: 50%;
    }
    h1 {
      margin: 0;
    }
    .description {
      font-size: 24px;
      color: #fff;
    }
  }
  .pops-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
    > h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 715px) {
    h1 {
      font-size: 24px;
      color: #fff;
    }
    .title-page {
      max-width: 300px;
      height: 80px;
      > h1 {
        font-size: 32px;
      }
    }
    .about-character {
      margin-bottom: 0;
      > img {
        width: 200px;
        height: 100px;
      }
      h1 {
        margin: 0;
      }
      .description {
        font-size: 12px;
        text-align: justify;
        color: #fff;
      }
    }
    .card-character {
      width: 100%;
    }
    .pops-up {
      > h1 {
        font-size: 30px;
      }
    }
  }
`;
