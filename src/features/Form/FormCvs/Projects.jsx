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
      projectDescription: ''
    },

    onSubmit: async (values) => {
      const data = {
        cvId: cvState.cvId,
        projectId: cvState.projectId,
      };
      await formActions.stepProject(data)
      props.history.push('/createcv-experience');
    },
  });

  const addProject = () => {
    const data = {
      projectName: formik.values.projectName,
      projectDescription: formik.values.projectDescription,
    }
    formActions.addProject(data)
  };

  const updateProject = (index) => {
    const data = {
      projectName: formik.values.projectName,
      projectDescription: formik.values.projectDescription,
    }
    formActions.updateProject(index, data)
  }

  const deleteProject = (index) => {
    const data = {
      projectName: formik.values.projectName,
      projectDescription: formik.values.projectDescription,
    }
    formActions.deleteProject(index, data);
  }

  console.log(formState)

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
              <>
                <div class="col-md-4 col-sm-6">
                  <label>Project Name</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      name="projectName"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <label>Description</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      name="projectDescription"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
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
                      onClick={addProject}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </>
              {formState.project.map((item, index) => {
                return (
                  <>
                    <div class="col-md-4 col-sm-6">
                      <label>Project Name</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          name="projectName"
                          defaultValue={item.projectName}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                      <label>Description</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          name="projectDescription"
                          defaultValue={item.projectDescription}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
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
                          onClick={() => updateProject(index)}
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
                          onClick={() => deleteProject(index)}
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

export default Projects;