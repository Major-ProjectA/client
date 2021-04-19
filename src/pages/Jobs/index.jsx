import React, { Component } from "react";
import Navbars from "../../components/Navbars";
import Footers from "../../components/Footers";
import FormJob from "../../features/FormJob";

class Jobs extends Component {
  render() {
    return (
      <>
        <Navbars />
        <FormJob />
        <Footers />
      </>
    );
  }
}

export default Jobs;
