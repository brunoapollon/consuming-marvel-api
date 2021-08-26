import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    }
  }
  .circle {
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    margin: 0 10px;
  }
  > span {
    color: #fff;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    > a {
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;
