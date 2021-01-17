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

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.props.updateTextDisplayed(this.interval),
      200
    );
  }

  render() {
    return (
      <Container>
        <HeroContainer>
          <Text showOptions={this.props.showOptions}>
            {this.props.textDisplayed}
            <span className="cursor">|</span>
          </Text>
          <GetStarted
            showButton={this.props.showButton}
            onClick={this.props.onGetStarted}
          >
            Get Started
          </GetStarted>
        </HeroContainer>
        <OptionCard showOptions={this.props.showOptions}>
          <Option showOptions={this.props.showOptions}>
            <h1>Feature 1</h1>
            <p>
              Enable unbiased screening of resume by hiding sensitive information like name gender, 
              email which describe ethnicity, religion or gender of a person until the shortlisting 
              so that everybody gets equal chance based entirely on skills.
            </p>
            <Link to="/recruiter">Continue</Link>
          </Option>
          <Option showOptions={this.props.showOptions}>
            <h1>Feature 2</h1>
            <p>
              To give an inclusive idea about the organization's opportunities we help check job
              descriptions and advertisements for dominating gender specific words and review along with
              suggesting user appropriate replacements.
            </p>
            <Link to="/something">Continue</Link>
          </Option>
        </OptionCard>
      </Container>
    );
  }
}

export default HeroSection;
