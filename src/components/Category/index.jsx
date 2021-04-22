import React, { Component } from 'react';

import { useSelector } from 'react-redux';

const Category = () => {
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);

  return !jobs.length ? (
    <div className="main-heading">
      <h2>Category</h2>
      <h4>Don't have data !</h4>
      <br />
    </div>
  ) : (
    <section>
      <div className="container">
        <div className="row">
          <div className="main-heading">
            <h2>
              Browse Jobs By <span>Category</span>
            </h2>
          </div>
        </div>
        {jobs.map((job) => (
          <div key={job._id}>
            <div className="col-md-3 col-sm-6 category-cus" style={{ float: 'left' }}>
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    {/* <i className="icon-bargraph" aria-hidden="true"></i>
                    <i
                      className="icon-bargraph abs-icon"
                      aria-hidden="true"
                    ></i> */}
                    <img src={job.career.icon} alt="" width="17%" />
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={'# '}>{job.career.careerName}</a>
                    </h4>

                    <p>122 Jobs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-4 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-tools-2" aria-hidden="true"></i>
                    <i className="icon-tools-2 abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href="browse-jobs-grid.html">Automotive Jobs</a>
                    </h4>

                    <p>155 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-4 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-briefcase" aria-hidden="true"></i>
                    <i
                      className="icon-briefcase abs-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href="browse-jobs-grid.html">Business</a>
                    </h4>

                    <p>300 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-edit" aria-hidden="true"></i>
                    <i className="icon-edit abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={"# "}>Education Training</a>
                    </h4>

                    <p>80 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-heart" aria-hidden="true"></i>
                    <i className="icon-heart abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href="browse-jobs-grid.html">Healthcare</a>
                    </h4>

                    <p>120 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-wine" aria-hidden="true"></i>
                    <i className="icon-wine abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={"# "}>Restaurant & Food</a>
                    </h4>

                    <p>78 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-map" aria-hidden="true"></i>
                    <i className="icon-map abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={"# "}>Transportation</a>
                    </h4>

                    <p>90 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-sm-6">
              <div className="category-box" data-aos="fade-up">
                <div className="category-desc">
                  <div className="category-icon">
                    <i className="icon-desktop" aria-hidden="true"></i>
                    <i className="icon-desktop abs-icon" aria-hidden="true"></i>
                  </div>
                  <div className="category-detail category-desc-text">
                    <h4>
                      <a href={"# "}>Telecommunications</a>
                    </h4>

                    <p>210 Jobs</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
