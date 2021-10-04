import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > nav {
    margin: 0;
    margin-top: 55px;
    width: 100%;
    height: 100%;
  }
  > nav,
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    > li {
      > a {
        color: #fff;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
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
      }
    }
  }
  @media (max-width: 1024px) {
    > nav,
    ul {
      > li {
        > a {
          font-size: 16px;
          padding: 5px;
          border-radius: 25px;
        }
        & + li {
          margin-left: 15px;
        }
      }
    }
  }
  @media (max-width: 612px) {
    > nav,
    ul {
      > li {
        > a {
          font-size: 14px;
          padding: 5px;
          border-radius: 25px;
        }
        & + li {
          margin-left: 10px;
        }
      }
    }
  }
`;
