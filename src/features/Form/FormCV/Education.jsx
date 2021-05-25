import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useEducation } from '../../../components/Store/Education';
import { useFormik } from 'formik';
import axios from 'axios';

const Education = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useEducation();
  const formik = useFormik({
    initialValues: {
      collegeName: '',
      collegeMajor: '',
      collegeQualification: '',

      schoolName: '',
      schoolMajor: '',
      schoolQualification: '',
    },

    onSubmit: async (values) => {
      const data = {
        collegeName: values.collegeName,
        collegeMajor: values.collegeMajor,
        collegeQualification: values.collegeQualification,

        schoolName: values.schoolName,
        schoolMajor: values.schoolMajor,
        schoolQualification: values.schoolQualification,

        cvId: cvState.cvId,
        educationId: cvState.educationId,
      };
      await formActions.stepEducation(data)
    },
  });

  useEffect(() => {
    if (!cvState.educationId) {
      const fetch = async () => {
        const education = await axios.post(`http://localhost:5000/api/cvs/createEducation/${cvState.cvId}`); //create empty CV
        cvActions.saveEducationId(education.data.cv._id);
      }
      fetch();
    } else {
      return () => formik.handleSubmit;
    }
  }, [cvState.cvId])

  const { next, back } = props;

  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Create Education</h1>
        </div>
      </section>

      <form onSubmit={formik.handleSubmit}>
        <div class="detail-desc section">
          <div class="container white-shadow">
            <div class="row">
              <div class="detail-pic js">
                <div class="box">
                  <input type="file" name="upload-pic[]" id="upload-pic" class="inputfile" />
                  <label for="upload-pic">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                  </label>
                </div>
              </div>
            </div>

            <div class="add-feild">
              <div class="row bottom-mrg">
                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>College</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your college."
                      required
                      name="collegeName"
                      defaultValue={formState.collegeName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Major</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your major."
                      required
                      name="collegeMajor"
                      defaultValue={formState.collegeMajor}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Qualification</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your qualification."
                      required
                      name="collegeQualification"
                      defaultValue={formState.collegeQualification}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <br />
                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>School</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your school."
                      required
                      name="schoolName"
                      defaultValue={formState.schoolName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Major</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your major."
                      required
                      name="schoolMajor"
                      defaultValue={formState.schoolMajor}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Qualification</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your qualification."
                      required
                      name="schoolQualification"
                      defaultValue={formState.schoolQualification}
                      onChange={formik.handleChange}
                    />
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

                    <div class="detail-pannel-footer-btn pull-left">
                      <button
                        onClick={next}
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
                        Next
                      </button>
                    </div>

                    <div class="detail-pannel-footer-btn pull-right">
                      <button
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
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-center text-muted">Step 2 / 6</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Education;
