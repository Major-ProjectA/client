import React from 'react';
import PropTypes from 'prop-types';

Job.propTypes = {
  renderjob: PropTypes.object,
};

function Job({ renderjob }) {
  return (
    <>
      <div class="brows-job-list">
        <div class="col-md-1 col-sm-2 small-padding">
          <div class="brows-job-company-img">
            <img src={renderjob.imgCom} class="img-responsive" alt="" style={{ cursor: 'pointer' }} />
          </div>
        </div>
        <div class="col-md-5 col-sm-5">
          <div class="brows-job-position">
            <h3 style={{ cursor: 'pointer' }}> {renderjob.position} </h3>
            <p>
              <span class="brows-job-sallery">
                <i class="fa fa-money"></i>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(renderjob.salary.from)}
                &nbsp; - &nbsp;
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(renderjob.salary.to)}
              </span>
              <span class="job-type cl-success bg-trans-success">{renderjob.workingTime}</span>
            </p>
          </div>
        </div>
        <div class="col-md-4 col-sm-3">
          <div class="brows-job-location">
            <p>
              <i class="fa fa-map-marker"></i>
              {renderjob.location.street}
            </p>
            <p>
              {renderjob.location.district}, {renderjob.location.city}
            </p>
          </div>
        </div>
        <div class="col-md-2 col-sm-2">
          <div class="brows-job-link">
            <a href="job-detail.html" class="btn btn-default">
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <span class="tg-themetag tg-featuretag">{renderjob.nameCom}</span>
    </>
  );
}

export default Job;
