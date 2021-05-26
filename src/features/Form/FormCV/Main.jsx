import React from 'react';
import { Steps, Step } from 'react-step-builder';

import Profile from './Profile';
import Education from './Education';
import Project from './Project';
import Experience from './Experience';
import Extras from './Extras';
import Review from './Review';

const Navigation = (props) => {
  console.log({ props });
  return (
    <div align="center">
      <div>
        <button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </button>
      </div>
      <div>
        <button type="primary" onClick={props.next}>
          Next
        </button>
      </div>
    </div>
  );
};

function Main() {
  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: 'after', // or before
    },
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
