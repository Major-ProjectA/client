import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { AuthContext } from '../../../components/Context/AuthContext';
function JobList({ job, deleteJob }) {
  const auth = useContext(AuthContext);

  if (auth.isAdmin === true) {
    return (
      <>
        <article>
          <div className="brows-job-list mng-company">
            <div className="col-md-1 col-sm-2 small-padding">
              <div className="brows-job-company-img">
                <img src={job.imgCom} className="img-responsive" alt="" />
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="brows-job-position">
                <h3 className="job-position"> {job.position} </h3>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money"></i>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.from)}
                    &nbsp; - &nbsp;
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.to)}
                  </span>
                  <span className="job-type cl-success bg-trans-success">{job.workingTime}</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-3">
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker"></i>
                  {job.location.street}
                </p>
                <p>
                  {job.location.district}, {job.location.city}
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="brows-job-link">
                <Link className="btn_view" to={`jobs/detail/${job._id}`}>
                  View
                </Link>
              </div>

              <div className="mng-company-action">
                &nbsp; &nbsp;
                <a href="#" data-toggle="tooltip" title="Edit">
                  <Link className="btn_edit" to={`edit-job/${job._id}`}>
                    <i className="fa fa-edit"></i>
                  </Link>
                </a>
                &nbsp;
                <a href="#" data-toggle="tooltip" title="Delete">
                  <Link className="btn_del" onClick={() => deleteJob(job._id)}>
                    <i className="fa fa-trash-o"></i>
                  </Link>
                </a>
              </div>
            </div>
          </div>

          <span className="tg-themetag tg-featuretag">{job.nameCom}</span>
        </article>
      </>
    );
  }
  else {
    return (
      <>
        <article>
          <div className="brows-job-list mng-company">
            <div className="col-md-1 col-sm-2 small-padding">
              <div className="brows-job-company-img">
                <img src={job.imgCom} className="img-responsive" alt="" />
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <div className="brows-job-position">
                <h3 className="job-position"> {job.position} </h3>
                <p>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money"></i>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.from)}
                    &nbsp; - &nbsp;
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary.to)}
                  </span>
                  <span className="job-type cl-success bg-trans-success">{job.workingTime}</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-3">
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker"></i>
                  {job.location.street}
                </p>
                <p>
                  {job.location.district}, {job.location.city}
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="brows-job-link">
                <Link className="btn_view" to={`jobs/detail/${job._id}`}>
                  View
                </Link>
              </div>

              {/* <div className="mng-company-action">
                &nbsp; &nbsp;
                <a href="#" data-toggle="tooltip" title="Edit">
                  <Link className="btn_edit" to={`edit-job/${job._id}`}>
                    <i className="fa fa-edit"></i>
                  </Link>
                </a>
                &nbsp;
                <a href="#" data-toggle="tooltip" title="Delete">
                  <Link className="btn_del" onClick={() => deleteJob(job._id)}>
                    <i className="fa fa-trash-o"></i>
                  </Link>
                </a>
              </div> */}
            </div>
          </div>

          <span className="tg-themetag tg-featuretag">{job.nameCom}</span>
        </article>
      </>
    );
  }
}

export default JobList;
