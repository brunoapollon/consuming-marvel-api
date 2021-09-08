import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 200px;
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
    margin-top: 55px;
  }
  > nav,
  ul {
    list-style: none;
    display: flex;
    > li {
      > a {
        color: #fff;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
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
      }
    }
  }
`;
