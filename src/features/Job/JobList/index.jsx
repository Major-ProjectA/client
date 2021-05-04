import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function JobList({ job }) {
  return (
    <>
      <article>
        <div class="brows-job-list">
          <div class="col-md-1 col-sm-2 small-padding">
            <div class="brows-job-company-img">
              <img src={job.imgCom} class="img-responsive" alt="" />
            </div>
          </div>
          <div class="col-md-5 col-sm-5">
            <div class="brows-job-position">
              <h3> {job.position} </h3>
              <p>
                <span class="brows-job-sallery">
                  <i class="fa fa-money"></i>
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.from)}
                  &nbsp; - &nbsp;
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.to)}
                </span>
                <span class="job-type cl-success bg-trans-success">{job.workingTime}</span>
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-3">
            <div class="brows-job-location">
              <p>
                <i class="fa fa-map-marker"></i>
                {job.location.street}
              </p>
              <p>
                {job.location.district}, {job.location.city}
              </p>
            </div>
          </div>
          <div class="col-md-2 col-sm-2">
            <div class="brows-job-link">
              {/* <a href="job-detail.html" class="btn btn-default"></a> */}
              <Link className="btn_view" to={`detail/${job._id}`}>
                View Detail
              </Link>
            </div>
          </div>
        </div>
        <span class="tg-themetag tg-featuretag">{job.nameCom}</span>
      </article>
    </>
  );
}

export default JobList;
