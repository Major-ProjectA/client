import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/createcv-profile';
  const isSecondStep = pathname === '/createcv-education';
  const isThirdStep = pathname === '/createcv-project';

  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isFirstStep ? 'step active' : 'step'}`}>
          <div>1</div>
          <div>
            {isSecondStep || isThirdStep ? (
              <Link to="/createcv-profile">Step 1</Link>
            ) : (
              'Step 1'
            )}
          </div>
        </div>
        <div className={`${isSecondStep ? 'step active' : 'step'}`}>
          <div>2</div>
          <div>{isThirdStep ? <Link to="/createcv-education">Step 2</Link> : 'Step 2'}</div>
        </div>
        <div className={`${pathname === '/createcv-project' ? 'step active' : 'step'}`}>
          <div>3</div>
          <div>Step 3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Progress);