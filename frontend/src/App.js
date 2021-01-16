import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeroSection from "./Components/HeroSection";
import Nav from "./Components/Nav";
import Recruiter from "./Components/Recruiter";

const Container = styled.div`
  width: 90vw;
  min-height: 100vh;

  margin: 0 auto;

  @media (max-width: 550px) {
    width: 85vw;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textDisplayed: "",
      showButton: false,
      showOptions: false,
    };

    this.bannerText = "Take a step towards gender inclusivity.";
  }

  onGetStarted = () => {
    this.setState({ showButton: false, showOptions: true });
  };

  updateTextDisplayed = (interval) => {
    const { textDisplayed } = this.state;
    const bannerText = this.bannerText;

    if (textDisplayed.length < bannerText.length) {
      this.setState({
        textDisplayed: bannerText.slice(0, textDisplayed.length + 1),
      });
    } else {
      clearInterval(interval);
      if (!this.state.showOptions) this.setState({ showButton: true });
    }
  };

  render() {
    return (
      <Router>
        <Container>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <HeroSection
                textDisplayed={this.state.textDisplayed}
                showButton={this.state.showButton}
                showOptions={this.state.showOptions}
                updateTextDisplayed={this.updateTextDisplayed}
                onGetStarted={this.onGetStarted}
              />
            </Route>
            <Route path="/recruiter">
              <Recruiter />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
