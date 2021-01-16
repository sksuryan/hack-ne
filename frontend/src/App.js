import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeroSection from "./Components/HeroSection";
import Nav from "./Components/Nav";

const Container = styled.div`
  width: 90vw;
  min-height: 100vh;

  margin: 0 auto;

  @media (max-width: 550px) {
    width: 85vw;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <HeroSection />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
