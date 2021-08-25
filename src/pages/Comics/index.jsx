import Header from "../../components/Header";

import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Content>
        <Header />
        <div className="slide-show">
          <h1>Teste</h1>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
