import React from 'react';

const Review = (props) => {
  const { back } = props;

  return (
    <>
      <section
        class="inner-header-title blank"
        style={{
          backgroundImage: `URL("https://www.mediafire.com/convkey/94a5/ld2xj8f54j7colg6g.jpg")`,
        }}
      >
        <div class="container">
          <h1>Review your CV</h1>
        </div>
      </section>

      <section class="full-detail">
        <div class="container">
          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Personal Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>First Name</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Last Name</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Email</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Date of Birth</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Phone Number</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Address</label>
              <p>Name</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Education Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>College</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Major</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Certification</label>
              <p>Name</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Project Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Project Name</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Project Description</label>
              <p>Name</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Experience Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Company Name</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Duration</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Position</label>
              <p>Name</p>
            </div>

            <div class="col-md-12 col-sm-12">
              <label>Experience Description</label>
              <p>Name</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Extra Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Skill</label>
              <p>Name</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Interest</label>
              <p>Name</p>
            </div>
          </div>
          <div class="detail pannel-footer">
            <div class="col-md-12 col-sm-12">
              <div class="detail-pannel-footer-btn pull-left">
                <button
                  onClick={back}
                  class="footer-btn choose-cover"
                  type="submit"
                  style={{
                    backgroundColor: '#3DB810',
                    border: 'none',
                    color: 'white',
                    padding: '15px 22px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                  }}
                >
                  Back
                </button>
              </div>

              <div class="detail-pannel-footer-btn pull-right">
                <button
                  class="footer-btn choose-cover"
                  style={{
                    backgroundColor: '#3DB810',
                    border: 'none',
                    color: 'white',
                    padding: '15px 22px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                  }}
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
