import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/createcv-profile';
  const isSecondStep = pathname === '/createcv-education';
  const isThirdStep = pathname === '/createcv-project';
  const isFourthStep = pathname === '/createcv-experience';
  const isFifthStep = pathname === '/createcv-extras';
  const isSixthStep = pathname === '/createcv-review';

  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isFirstStep ? 'step active' : 'step'}`}>
          <div>1</div>
          <div>
            {isSecondStep || isThirdStep || isFourthStep || isFifthStep || isSixthStep ? 
              <Link to="/createcv-profile">Profile</Link> : 'Profile'
            }
          </div>
        </div>

        <div className={`${isSecondStep ? 'step active' : 'step'}`}>
          <div>2</div>
          <div>
            {isThirdStep || isFourthStep || isFifthStep || isSixthStep ? 
              <Link to="/createcv-education">Education</Link> : 'Education'
            }
          </div>
        </div>

        <div className={`${isThirdStep ? 'step active' : 'step'}`}>
          <div>3</div>
          <div>
            {isFourthStep || isFifthStep || isSixthStep ? 
              <Link to="/createcv-project">Project</Link> : 'Project'
            }
          </div>
        </div>

        <div className={`${isFourthStep ? 'step active' : 'step'}`}>
          <div>4</div>
          <div>
            {isFifthStep || isSixthStep ? 
              <Link to="/createcv-experience">Experience</Link> : 'Experience'
            }
          </div>
        </div>

        <div className={`${isFifthStep ? 'step active' : 'step'}`}>
          <div>5</div>
          <div>
            {isSixthStep ? 
              <Link to="/createcv-extras">Extras</Link> : 'Extras'
            }
          </div>
        </div>

        <div className={`${pathname === '/createcv-review' ? 'step active' : 'step'}`}>
          <div>6</div>
          <div>Review</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Progress);