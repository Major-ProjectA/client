import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useExperience } from '../../../components/Store/Experience';

const Experiences = (props) => {
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
      props.history.push('/createcv-extras');
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
  
  const previous = () => {
    props.history.push('/createcv-project'); 
  };

  return (
    <>
      <section class="full-detail">
        <form onSubmit={formik.handleSubmit}>
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Experience Details</h2>

              <div class="col-md-4 col-sm-6">
                <label>Company Name</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company name"
                    name="companyName"
                    defaultValue={formState.companyName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <label>Duration</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name="duration"
                    defaultValue={formState.duration}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div class="col-md-4 col-sm-6">
                <label>Position</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name="position"
                    defaultValue={formState.position}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div class="col-md-12 col-sm-6">
                <label>Description</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Description"
                    name="expDescription"
                    defaultValue={formState.expDescription}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
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

export default Experiences;