import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 200px;
    height: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 0, black 50%);
    mask-image: linear-gradient(to top, transparent 0, black 50%);
    border-radius: 10px;
    object-fit: cover;
    &:hover {
      -moz-transform: scale(1.3);
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
      position: relative;
      margin: 0 30px;
      transition-delay: 0.1s;
    }
  }

  & + div {
    margin-left: 50px;
  }
`;
