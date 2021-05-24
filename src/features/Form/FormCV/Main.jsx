import React from "react";

import Profile from "./Profile";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import Extras from "./Extras";
import Review from "./Review";

export default class Main extends React.Component {
  state = {
    step: 1,
  }
  // process to next step
  next = () => {
    this.setState(prevState => {
      return {
        step: prevState.step + 1
      }
    })
  }

  // process to previous step
  back = () => {
    this.setState(prevState => {
      return {
        step: prevState.step - 1
      }
    })
  }

  render() {
    const { step } = this.state
    switch (step) {
      case 1:
        return (
          <Profile
            next={this.next}
          />
        );
      case 2:
        return (
          <Education
            next={this.next}
            back={this.back}
          />
        );
      case 3:
        return (
          <Project
            next={this.next}
            back={this.back}
          />
        );
      case 4:
        return (
          <Experience
            next={this.next}
            back={this.back}
          />
        );
      case 5:
        return (
          <Extras
            next={this.next}
            back={this.back}
          />
        );
      case 6:
        return (
          <Review
            back={this.back}
          />
        );
      default:
    }
  }
}