import React from 'react';
import { useProfile } from '../../../components/Store/Profile';
import { useEducation } from '../../../components/Store/Education';
import { useProject } from '../../../components/Store/Project';
import { useExperience } from '../../../components/Store/Experience';
import { useExtra } from '../../../components/Store/Extra';

const Review = (props) => {
  const [profileState] = useProfile();
  const [eduState] = useEducation();
  const [projectState] = useProject();
  const [expState] = useExperience();
  const [extraState] = useExtra();
  console.log(projectState.project)
  const finish = () => {
    props.history.push('/home');
  };

  const previous = () => {
    props.history.push('/createcv-extras');
  };

  return (
    <>
      <section class="full-detail">
        <div class="container">
          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Personal Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>First Name</label>
              <p>{profileState.firstname}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Last Name</label>
              <p>{profileState.lastname}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Email</label>
              <p>{profileState.email}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Date of Birth</label>
              <p>{profileState.dob}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Phone Number</label>
              <p>{profileState.phone}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Address</label>
              <p>{profileState.address}</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Education Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>College</label>
              <p>{eduState.collegeName}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Major</label>
              <p>{eduState.collegeMajor}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Certification</label>
              <p>{eduState.collegeQualification}</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Project Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Project Name</label>
              <p>{projectState.projectName}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Project Description</label>
              <p>{projectState.projectDescription}</p>
              <p>{projectState.project.projectName}</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Experience Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Company Name</label>
              <p>{expState.companyName}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Duration</label>
              <p>{expState.duration}</p>
            </div>

            <div class="col-md-4 col-sm-12">
              <label>Position</label>
              <p>{expState.position}</p>
            </div>

            <div class="col-md-12 col-sm-12">
              <label>Experience Description</label>
              <p>{expState.expDescription}</p>
            </div>
          </div>

          <div class="row bottom-mrg extra-mrg">
            <h2 class="detail-title">Extra Details</h2>
            <div class="col-md-4 col-sm-12">
              <label>Additional Information</label>
              <p>{extraState.addInfor}</p>
            </div>
          </div>
          <div class="detail pannel-footer">
            <div class="col-md-12 col-sm-12">
              <div class="detail-pannel-footer-btn pull-left">
                <button
                  onClick={previous}
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
                  Previous
                </button>
              </div>

              <div class="detail-pannel-footer-btn pull-right">
                <button
                  class="footer-btn choose-cover"
                  onClick={finish}
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
