import React from "react";
import { Container, SubmitButton } from "./styles";

class Recruiter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: null,
      submitButtonClass: "",
      errorMsg: "Please select your resume!",
    };
  }

  onFileChange = (e) => {
    this.setState({ resume: e.target.files[0] });
  };

  onSubmit = () => {
    const reqURL = "http://localhost:5000/recruiter/api";
    if (this.state.resume) {
      const formData = new FormData();
      formData.append("file", this.state.resume);

      const options = {
        method: "POST",
        body: formData,
      };

      fetch(reqURL, options)
        .then((data) => data.blob())
        .then((data) => {
          let url = window.URL.createObjectURL(data);
          let a = document.createElement("a");
          a.href = url;
          a.download = "results.txt";
          a.click();
          this.setState({
            submitButtonClass: "",
            errorMsg: "Please select your resume!",
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            submitButtonClass: "",
            errorMsg: "Whoops, seems like we met an error😨",
          });
        });

      this.setState({
        resume: null,
        submitButtonClass: "button is-black is-loading",
        errorMsg: "Please wait, while we process your resume🥳",
      });
    } else {
      this.setState({ errorMsg: "Uh huh, please select a file.." }, () => {
        setTimeout(
          () => this.setState({ errorMsg: "Please select your resume!" }),
          5000
        );
      });
    }
  };

  render() {
    return (
      <Container>
        <div className="field">
          <div className="file is-boxed has-name is-black">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="resume"
                accept="application/pdf"
                onChange={this.onFileChange}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">Upload!</span>
              </span>
              <span className="file-name">
                {this.state.resume
                  ? this.state.resume.name
                  : "example-resume.pdf"}
              </span>
            </label>
          </div>
        </div>
        <SubmitButton
          className={this.state.submitButtonClass}
          onClick={this.onSubmit}
        >
          Submit
        </SubmitButton>
        <p>{this.state.errorMsg}</p>
      </Container>
    );
  }
}

export default Recruiter;
