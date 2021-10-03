import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

function About() {
  return (
    <Container>
      <Content>
        <Header />
        <div>
          <p>
            This project aims to put into practice the knowledge of designer
            Ariadna and full stack developer Bruno. It was designed in figma
            with application of UI knowledge and developed in ReactJs aiming at
            a satisfactory experience for the user, dealing with bugs of the
            chosen api and bringing satisfying visual information. All rights to
            the content used are reserved to marvel and this project is not for
            profit.
          </p>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Content>
    </Container>
  );
}

export default About;
