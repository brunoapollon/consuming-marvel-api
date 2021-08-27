import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 0, black 50%);
    mask-image: linear-gradient(to top, transparent 0, black 50%);
  }

  & + div {
    margin-left: 50px;
  }
`;
