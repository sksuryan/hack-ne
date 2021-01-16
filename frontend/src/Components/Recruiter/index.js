import React from "react";
import { Container, SubmitButton } from "./styles";
import "bulma";

class Recruiter extends React.Component {
  render() {
    return (
      <Container>
        <div class="field">
          <div class="file is-boxed has-name is-black">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Upload!</span>
              </span>
              <span class="file-name">example-resume.pdf</span>
            </label>
          </div>
        </div>
        <SubmitButton>Submit</SubmitButton>
      </Container>
    );
  }
}

export default Recruiter;
