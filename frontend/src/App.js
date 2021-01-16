import styled from "styled-components";

import HeroSection from "./Components/HeroSection";
import Nav from "./Components/Nav";

const Container = styled.div`
  width: 90vw;
  min-height: 100vh;

  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Nav />
      <HeroSection />
    </Container>
  );
}

export default App;
