import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  width: 100%;
  height: 100%;
  transition: background 0.4s ease-in;
  input[type="radio"] {
    display: none;
  }
  .card {
    position: absolute;
    width: 60%;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    transition: transform 0.4s ease;
    cursor: pointer;
  }
  .container-slider {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .cards {
    position: relative;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  .dots {
    display: flex;
    > div {
      width: 17px;
      height: 17px;
      background: #c4c4c4;
      border-radius: 50%;
      & + div {
        margin-left: 20px;
      }
    }
  }
  #item-1:checked ~ .cards #song-3,
  #item-2:checked ~ .cards #song-1,
  #item-3:checked ~ .cards #song-2 {
    transform: translatex(-40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }
  #item-1:checked ~ .cards #song-2,
  #item-2:checked ~ .cards #song-3,
  #item-3:checked ~ .cards #song-1 {
    transform: translatex(40%) scale(0.8);
    opacity: 0.4;
    z-index: 0;
  }
  #item-1:checked ~ .cards #song-1,
  #item-2:checked ~ .cards #song-2,
  #item-3:checked ~ .cards #song-3 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;

    img {
      box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
    }
  }
`;
