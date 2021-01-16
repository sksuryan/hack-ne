import React from "react";

import { Container, GetStarted, Text } from "./styles";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);

    this.bannerText = "Take a step towards gender inclusivity.";

    this.state = {
      textDisplayed: "",
      showButton: false,
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

  componentDidMount() {
    this.interval = setInterval(this.updateBannerText, 200);
  }

  render() {
    return (
      <Container>
        <Text>
          {this.state.textDisplayed}
          <span className="cursor">|</span>
        </Text>
        <GetStarted showButton={this.state.showButton}>Get Started</GetStarted>
      </Container>
    );
  }
}

export default HeroSection;
