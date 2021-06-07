import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useEducation } from '../../../components/Store/Education';

const Educations = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useEducation();

  const formik = useFormik({
    initialValues: {
      collegeName: '',
      collegeMajor: '',
      collegeQualification: ''
    },

    onSubmit: async (values) => {
      const data = {
        cvId: cvState.cvId,
        educationId: cvState.educationId,
      };
      await formActions.stepEducation(data)
      props.history.push('/createcv-project');
    },
  });

  const addEdu = () => {
    const data = {
      collegeName: formik.values.collegeName,
      collegeMajor: formik.values.collegeMajor,
      collegeQualification: formik.values.collegeQualification
    }
    console.log(data)
    formActions.addEdu(data)
  };

  const updateEdu = (index) => {
    const data = {
      collegeName: formik.values.collegeName,
      collegeMajor: formik.values.collegeMajor,
      collegeQualification: formik.values.collegeQualification
    }
    formActions.updateEdu(index, data)
  }

  const deleteEdu = (index) => {
    const data = {
      collegeName: formik.values.collegeName,
      collegeMajor: formik.values.collegeMajor,
      collegeQualification: formik.values.collegeQualification
    }
    formActions.deleteEdu(index, data);
  }

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

  const previous = () => {
    props.history.push('/createcv-profile');
  };

  return (
    <>
      <section class="full-detail">
        <form onSubmit={formik.handleSubmit}>
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Education Details</h2>
              <form onSubmit={formik.handleSubmit}>
                <div class="col-md-3 col-sm-6">
                  <label>College</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Example: ABC University"
                      name="collegeName"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-3 col-sm-6">
                  <label>Major</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Example: Marketing"
                      name="collegeMajor"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-3 col-sm-6">
                  <label>Qualification</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Diploma - Bachelor’s degree - Master’s degree"
                      name="collegeQualification"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-3 col-sm-6">
                  <label>Features</label>
                  <div class="input-group">
                    <button
                      style={{
                        backgroundColor: '#3DB810',
                        border: 'none',
                        color: 'white',
                        padding: '13px 18px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                      }}
                      type="button"
                      onClick={addEdu}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
              {formState.education.map((item, index) => {
                return (
                  <>
                    <div class="col-md-3 col-sm-6">
                      <label>{item.collegeName}</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="College name"
                          name="collegeName"
                          Value={item.collegeName}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <label>Major</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="College Major"
                          name="collegeMajor"
                          Value={item.collegeMajor}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <label>Qualification</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="College Qualification"
                          name="collegeQualification"
                          Value={item.collegeQualification}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-6">
                      <label>Features</label>
                      <div class="input-group">
                        <button
                          style={{
                            backgroundColor: '#FFBF00',
                            border: 'none',
                            color: 'white',
                            padding: '13px 18px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                          }}
                          type="button"
                          onClick={() => updateEdu(index)}
                        >
                          Update
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button
                          style={{
                            backgroundColor: '#FF0000',
                            border: 'none',
                            color: 'white',
                            padding: '13px 18px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                          }}
                          type="button"
                          onClick={() => deleteEdu(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                  </>
                );
              })}
            </div>
            <div class="detail pannel-footer">
              <div class="col-md-12 col-sm-12">
                <div class="detail-pannel-footer-btn pull-left">
                  <button
                    class="footer-btn choose-cover"
                    onClick={previous}
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
                    Save and continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Educations;