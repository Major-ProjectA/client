import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useProject } from '../../../components/Store/Project';
import { useFormik } from 'formik';
import axios from 'axios';

const Project = (props) => {
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

  const { next, back } = props;

  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Create Project</h1>
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
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your project name."
                      required
                      name="projectName"
                      defaultValue={formState.projectName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <label>Project Description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your project description."
                      required
                      name="projectDescription"
                      defaultValue={formState.projectDescription}
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
                <p className="text-center text-muted">Step 3 / 6</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Project;
