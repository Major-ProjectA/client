import React from "react";
import { Steps, Step } from "react-step-builder";
import { Button, Col, Row } from "antd";

import Profile from "./Profile";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import Extras from "./Extras";
import Review from "./Review";

const Navigation = (props) => {
  console.log({ props });
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

function Main() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };

  return (
    <Steps config={config}>
      <Step component={Profile} />
      <Step component={Education} />
      <Step component={Project} />
      <Step component={Experience} />
      <Step component={Extras} />
      <Step component={Review} />
    </Steps>
  );
}

export default Main;