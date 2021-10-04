import styled from "styled-components";

export const Container = styled.a`
  width: ${(props) => (props.plus ? "680px" : "300px")};
  height: ${(props) => (props.plus ? "600px" : "400px")};
  border-radius: 10px;
  background: #4f4a4a;
  padding: 30px 40px 0;
  box-sizing: border-box;
  text-decoration: none;
  & + a {
    margin-left: 100px;
  }
  @media (max-width: 1024px) {
    padding: 15px 20px 0;
    width: ${(props) => (props.plus ? "340px" : "150px")};
    height: ${(props) => (props.plus ? "500px" : "300px")};
    & + a {
      margin-left: 25px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > span {
      margin-top: 10px;
      color: #fff;
      font-size: 14px;
      font-weight: 300;
      align-self: flex-start;
    }
  }
  img {
    width: ${(props) => (props.plus ? "580px" : "200px")};
    height: ${(props) => (props.plus ? "500px" : "300px")};
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    img {
      width: ${(props) => (props.plus ? "290px" : "100px")};
      height: ${(props) => (props.plus ? "250px" : "125px")};
    }
    > div {
      > span {
        font-size: 12px;
      }
    }
  }
`;
