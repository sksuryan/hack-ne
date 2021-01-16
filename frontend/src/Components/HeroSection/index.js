import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  GetStarted,
  HeroContainer,
  Option,
  OptionCard,
  Text,
} from "./styles";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);

    this.bannerText = "Take a step towards gender inclusivity.";

    this.state = {
      textDisplayed: "",
      showButton: false,
      showOptions: false,
    };

    this.interval = null;
  }

  updateBannerText = () => {
    const { textDisplayed } = this.state;
    const bannerText = this.bannerText;

    if (textDisplayed.length < bannerText.length) {
      this.setState({
        textDisplayed: bannerText.slice(0, textDisplayed.length + 1),
      });
    } else {
      clearInterval(this.interval);
      this.setState({ showButton: true });
    }
  };

  onGetStarted = () => {
    this.setState({ showButton: false, showOptions: true });
  };

  componentDidMount() {
    this.interval = setInterval(this.updateBannerText, 200);
  }

  render() {
    return (
      <Container>
        <HeroContainer>
          <Text showOptions={this.state.showOptions}>
            {this.state.textDisplayed}
            <span className="cursor">|</span>
          </Text>
          <GetStarted
            showButton={this.state.showButton}
            onClick={this.onGetStarted}
          >
            Get Started
          </GetStarted>
        </HeroContainer>
        <OptionCard showOptions={this.state.showOptions}>
          <Option showOptions={this.state.showOptions}>
            <h1>Feature 1</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Link to="/recruiter">Continue</Link>
          </Option>
          <Option showOptions={this.state.showOptions}>
            <h1>Feature 2</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Link to="/something">Continue</Link>
          </Option>
        </OptionCard>
      </Container>
    );
  }
}

export default HeroSection;
