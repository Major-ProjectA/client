import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useProject } from '../../../components/Store/Project';

const Projects = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useProject();
  const formik = useFormik({
    initialValues: {
      projectName: '',
      projectDescription: '',
    },

    onSubmit: async (values) => {
      const data = {
        projectName: values.projectName,
        projectDescription: values.projectDescription,

        cvId: cvState.cvId,
        projectId: cvState.projectId,
      };
      await formActions.stepProject(data)
      props.history.push('/createcv-experience');
    },
  });

  useEffect(() => {
    if (!cvState.projectId) {
      const fetch = async () => {
        const project = await axios.post(`http://localhost:5000/api/cvs/createProject/${cvState.cvId}`); //create empty CV
        cvActions.saveProjectId(project.data.cv._id);
      }
      fetch();
    } else {
      return () => formik.handleSubmit;
    }
  }, [cvState.cvId])

  const previous = () => {
    props.history.push('/createcv-education');
  };

  return (
    <>
      <section class="full-detail">
        <form onSubmit={formik.handleSubmit}>
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Project Details</h2>

              <div class="col-md-6 col-sm-6">
                <label>Project Name</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Project name"
                    name="projectName"
                    defaultValue={formState.projectName}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div class="col-md-6 col-sm-6">
                <label>Project Description</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Description"
                    name="projectDescription"
                    defaultValue={formState.projectDescription}
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

export default Projects;