import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

import Navbars from '../../../components/Navbars';
import Footer from '../../../components/Footers';
// import JobList from '../JobList';

function DetailJobHotPage() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [jobhot] = state.jobAPI.jobhot;
  const [detailJobHot, setDetailJobHot] = useState([]);
  console.log(params);

  useEffect(() => {
    if (params) {
      jobhot.forEach((jobhot) => {
        if (jobhot._id === params.id) setDetailJobHot(jobhot);
      });
    }
  }, [jobhot, params]);

  console.log(detailJobHot);

  if (detailJobHot.length === 0) return null;
  return (
    <>
      <Navbars />
      <br /> <br />
      <section
        class="inner-header-title"
        style={{
          backgroundImage: `URL(${detailJobHot.thumbnail})`,
        }}
      >
        <div class="container">
          <h1></h1>
        </div>
      </section>
      <section class="detail-desc">
        <div class="container white-shadow">
          <div class="row">
            <div class="detail-pic">
              <img src={detailJobHot.imgCom} class="img" alt="" />
            </div>

            <div class="detail-status">
              <span>2 Days Ago</span>
            </div>
          </div>

          <div class="row bottom-mrg">
            <div class="col-md-8 col-sm-8">
              <div class="detail-desc-caption">
                <h4 style={{ color: '#33CC33', fontWeight: 'bold' }}>{detailJobHot.nameCom}</h4>
                <span class="designation">{detailJobHot.position}</span>
                <p style={{ textAlign: 'justify' }}>{detailJobHot.detail}</p>
                <ul>
                  <li>
                    <i class="fa fa-briefcase"></i>
                    <span>{detailJobHot.workingTime}</span>
                  </li>
                  {/* <li>
                    <i class="fa fa-flask"></i>
                    <span>3 Year Experience</span>
                  </li> */}
                  <li style={{ float: 'left' }}>
                    <i class="fa fa-money"></i>
                    <span>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                        detailJobHot.salary.from
                      )}
                      &nbsp; - &nbsp;
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                        detailJobHot.salary.to
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-sm-4">
              <div class="get-touch">
                <h4 style={{ fontWeight: 'bold', color: '#3ce' }}>Get in Touch</h4>
                <ul>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>
                      {detailJobHot.location.street}, {detailJobHot.location.district}, {detailJobHot.location.city}
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-globe"></i>
                    <span>{detailJobHot.siteCom}</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <span>{detailJobHot.contact.contactEmail}</span>
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>{detailJobHot.contact.contactPhone}</span>
                  </li>
                  <li>
                    <i class="fa fa-user"></i>
                    <span>{detailJobHot.contact.contactName}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row no-padd">
            <div class="detail pannel-footer">
              <div class="col-md-5 col-sm-5">
                <ul class="detail-footer-social">
                  <li>
                    <a href={'# '}>
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-7 col-sm-7">
                <div class="detail-pannel-footer-btn pull-right">
                  <a href="#" class="footer-btn grn-btn" title="">
                    Quick Apply
                  </a>
                  <a href="#" class="footer-btn blu-btn" title="">
                    Save Draft
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="full-detail-description full-detail">
        <div class="container">
          <div class="row row-bottom">
            <h2 class="detail-title" style={{ fontWeight: 'bold' }}>
              About a Job
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p> */}
            <ul class="detail-list">
              <li>{detailJobHot.requirement}</li>
            </ul>
          </div>

          <div class="row row-bottom">
            <h2 class="detail-title" style={{ fontWeight: 'bold' }}>
              Benefit
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p> */}
            <ul class="detail-list">
              <li>{detailJobHot.benefit}</li>
            </ul>
          </div>

          <div class="row row-bottom">
            <h2 class="detail-title" style={{ fontWeight: 'bold' }}>
              Other Information
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p> */}
            <ul class="detail-list">
              <li>{detailJobHot.certification}</li>
            </ul>
          </div>
          <div class="detail-pannel-footer-btn pull-right">
            <a href="/" class="footer-btn blu-btn" title="">
              Back
            </a>
          </div>
        </div>

        {/* <h2>Related Jobs</h2> */}
        {/* <div>
          {jobs.map((job) => {
            return job.category === detailJobHot.category ? <JobList key={job._id} job={job} /> : null;
          })}
        </div> */}
      </section>
      <div class="clearfix"></div>
      <Footer />
    </>
  );
}

export default DetailJobHotPage;
