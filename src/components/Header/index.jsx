import React from "react";

import LogoMarvel from "../../assets/logo.svg";

import { Container, Content } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={LogoMarvel} alt="logo-marvel" loading="lazy" />
        <nav className="menu">
          <ul>
            <li>
              <a href="/home">
                <span>home</span>
              </a>
            </li>
            <li>
              <a href="/comics">
                <span>comics</span>
              </a>
            </li>
            <li>
              <a href="/characters">
                <span>characters</span>
              </a>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}

export default Header;
