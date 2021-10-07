import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 100px;
  .scroll-container {
    display: flex;
    width: 100%;
    height: max-content;
  }
  & + div {
    margin-top: 200px;
  }
  @media (max-width: 1024px) {
    & + div {
      margin-top: 100px;
    }
  }
`;
