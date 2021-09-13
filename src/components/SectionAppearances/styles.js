import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .scroll-container {
    display: flex;
  }
  & + div {
    margin-top: 200px;
  }
`;
