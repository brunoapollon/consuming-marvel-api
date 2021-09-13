import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  img {
    width: ${(props) => (props.comics ? "200px" : "400px")};
    height: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent 0, black 50%);
    mask-image: linear-gradient(to top, transparent 0, black 50%);
    border-radius: 10px;
    object-fit: cover;
  }
  .name {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    color: #fff;
    position: absolute;
    left: 0px;
    bottom: 10px;
  }
  & + div {
    margin-left: 50px;
  }
`;
