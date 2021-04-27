import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbars from '../../../components/Navbars';
import Footer from '../../../components/Footers';
import jobApi from '../../../api/jobApi';

const JobList = () => {
  const [fetchJobs, setFetchJobs] = useState([]);

  //JOB LIST
  useEffect(() => {
    const fetchJobs = async () => {
      const joblist = await jobApi.getAllJob();

      // console.log(joblist);

      setFetchJobs(joblist);
    };
    fetchJobs();
  }, [jobApi]);

  //JOB DETAIL

  return (
    <>
      <Navbars />
      <br /> <br />
      <section
        class="inner-header-title"
        style={{
          backgroundImage: `URL("https://www.mediafire.com/convkey/3256/oy9yrpyhvvwgu8b6g.jpg")`,
        }}
      >
        <div class="container">
          <h1>Browse Companies</h1>
        </div>
      </section>
      {/* <div class="clearfix"></div> */}
      <section class="brows-job-category">
        <div class="container">
          <div class="row extra-mrg">
            <div class="wrap-search-filter">
              <form>
                <div className="col-md-3 col-sm-6">
                  <input type="text" className="form-control" placeholder="Skills, Designations, Keyword" />
                </div>

                <div className="col-md-3 col-sm-6">
                  <select id="choose-city" className="form-control">
                    <option>All City</option>
                    <option value="HCM">Ho Chi Minh</option>
                    <option value="HN">Ha Noi</option>
                  </select>
                </div>

                <div className="col-md-3 col-sm-6">
                  <select className="form-control">
                    <option>Category</option>
                    <option value="Journalist">Journalist</option>
                    <option value="realestate">Real estate</option>
                    <option value="it">Information technology</option>
                    <option value="sports">Sports</option>
                    <option value="bank">Bank</option>
                    <option value="spa">Spa</option>
                    <option value="guard-security">Guard - Security</option>
                    <option value="laborsafety">Labor safety</option>
                    <option value="sales-business">Sales - Business</option>
                    <option value="wholesale-retail">Wholesale - Retail</option>
                    <option value="lifeinsurance">Life insurance</option>
                    <option value="translators">Translators</option>
                    <option value="Post-telecommunication">Post - Telecommunication</option>
                    <option value="breed-veterinary">Breed - Veterinary</option>
                    <option value="stock">Stock</option>
                    <option value="biotechnology">Biotechnology</option>
                    <option value="nutrition">Nutrition</option>
                    <option value="mechanical">Mechanical</option>
                    <option value="oilandgas">Oil and gas</option>
                    <option value="textile">Textile</option>
                    <option value="tourism">Tourism</option>
                    <option value="pharmaceutical">pharmaceutical</option>
                    <option value="electronic">Electronic</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="entertaiment">Entertaiment</option>
                    <option value="education">Education</option>
                    <option value="nautical">Nautical</option>
                    <option value="aviation">Aviation</option>
                    <option value="accountant">Accountant</option>
                    <option value="architecture">Architecture</option>
                    <option value="law">Law</option>
                    <option value="restauranthotel">Restaurant Hotel</option>
                  </select>
                </div>

                <div className="col-md-3 col-sm-6">
                  <button type="submit" className="btn btn-primary" style={{ float: 'right' }}>
                    Search Job
                  </button>
                </div>

                <div class="col-md-9 col-sm-12">
                  <div class="job-types">
                    <label>
                      <input type="checkbox" class="full-time check-option checkbox" CHECKED />
                      &nbsp;Full Time
                    </label>

                    <label>
                      <input type="checkbox" class="part-time check-option checkbox" />
                      &nbsp;Part Time
                    </label>

                    <label>
                      <input type="checkbox" class="freelancer check-option checkbox" />
                      &nbsp;Freelancer
                    </label>

                    <label>
                      <input type="checkbox" class="internship check-option checkbox" />
                      &nbsp; Internship
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="item-click">
            {fetchJobs.map((renderJob) => (
              <article key={renderJob._id}>
                <div class="brows-job-list">
                  <div class="col-md-1 col-sm-2 small-padding">
                    <div class="brows-job-company-img">
                      <Link to={'/job-listing/detail/' + renderJob._id}>
                        <img src={renderJob.imgCom} class="img-responsive" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-5 col-sm-5">
                    <div class="brows-job-position">
                      <h3> {renderJob.position} </h3>
                      <p>
                        <span class="brows-job-sallery">
                          <i class="fa fa-money"></i>${renderJob.salary.from} -{renderJob.salary.to}
                        </span>
                        <span class="job-type cl-success bg-trans-success">{renderJob.workingTime}</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-3">
                    <div class="brows-job-location">
                      <p>
                        <i class="fa fa-map-marker"></i>
                        {renderJob.location.street}
                      </p>
                      <p>
                        {renderJob.location.district}, {renderJob.location.city}
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
                <span class="tg-themetag tg-featuretag">{renderJob.nameCom}</span>
              </article>
            ))}
          </div>

          <div>
            <div></div>
          </div>

          <div class="row">
            <ul class="pagination">
              <li>
                <a href="#">&laquo;</a>
              </li>
              <li class="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
              </li>
              <li>
                <a href="#">&raquo;</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobList;
