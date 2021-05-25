import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useEducation } from '../../../components/Store/Education';
import Education from './Education';

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
    formActions.addEdu(data)
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
              {formState.education.map(item => (
                <Education data={item} />
              ))}

              <Education handlerchange={formik.handleChange} />
              <button type="button" onClick={addEdu}>Save</button>
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