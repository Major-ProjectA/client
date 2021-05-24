import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useExperience } from '../../../components/Store/Experience';
import { useFormik } from 'formik';
import axios from 'axios';

const Experience = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useExperience();
  const formik = useFormik({
    initialValues: {
      companyName: '',
      duration: '',
      position: '',
      expDescription: '',
    },

    onSubmit: async (values) => {
      const data = {
        companyName: values.companyName,
        duration: values.duration,
        position: values.position,
        expDescription: values.expDescription,

        cvId: cvState.cvId,
        experienceId: cvState.experienceId
      };
      await formActions.stepExperience(data)
    },
  });

  useEffect(() => {
    if (!cvState.experienceId) {
      const fetch = async () => {
        const experience = await axios.post(`http://localhost:5000/api/cvs/createExperience/${cvState.cvId}`); //create empty CV
        cvActions.saveExperienceId(experience.data.cv._id);
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
          <h1>Create Experience</h1>
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
                    <label>Company</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your company."
                      required
                      name="companyName"
                      defaultValue={formState.companyName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Duration</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your duration."
                      required
                      name="duration"
                      defaultValue={formState.duration}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Postion</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your position."
                      required
                      name="position"
                      defaultValue={formState.position}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <br/>
                <div class="col-md-12 col-sm-12">
                  <div class="input-group">
                    <label>Description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your experience description."
                      required
                      name="expDescription"
                      defaultValue={formState.expDescription}
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
                <p className="text-center text-muted">Step 4 / 6</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Experience;
