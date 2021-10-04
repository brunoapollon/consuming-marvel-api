import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%max-content;
  overflow: hidden;
  margin-bottom: 200px;
  box-sizing: border-box;
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    color: #fff;
    margin-left: 50px;
  }
  .scroll-container {
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    display: flex;
    overflow: hidden;
    margin: 0 50px 0;
  }
  @media (max-width: 1024px) {
    margin-bottom: 100px;
    h1 {
      font-size: 24px;
    }
    .scroll-container {
      height: ${(props) => (props.comics ? "300px" : "200px")};
    }
  }
`;
