import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  > img {
    width: 130px;
    height: 50px;
  }
  > nav {
    margin: 30px;
    width: 100%;
  }
  > nav,
  ul {
    list-style: none;
    margin: 15px auto;
    display: flex;
    padding: 0;
    > li {
      > a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;
        padding: 5px;
        border-radius: 25px;
        .selected {
          background: #ed1d24;
        }
        &:hover {
          background: #ed1d24;
        }
      }
      & + li {
        margin-left: 25px;
        @media (max-width: 1024px) {
          margin-left: 10px;
        }
      }
    }
  }
  .credits {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .section-names {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .names {
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        color: #fff;
        font-size: 14px;
        font-family: "Montserrat", sans-serif;
        margin-right: 10px;
      }
      a + a {
        margin-left: 10px;
      }
      @media (max-width: 715px) {
        > span {
          display: none;
        }
      }
    }
  }
  .circle {
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    margin: 0 10px;
  }
  span {
    color: #fff;
    font-size: 14px;
    > a {
      text-decoration: none;
      color: #fff;
      font-size: 14px;
    }
  }
`;
