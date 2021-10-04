import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 200px;
  h1 {
    font-size: 60px;
    color: #fff;
    margin-left: 50px;
  }
  .scroll-container {
    display: flex;
    width: 100%;
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
