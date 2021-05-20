import React from 'react';
import { useCV } from '../../../components/Store/CV';
import { useFormCV } from '../../../components/Store/Project';
import { useFormik } from 'formik';

const Project = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useFormCV();
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
      };
      await formActions.stepProject(data)
    },
  });
  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Project Details</h1>
        </div>
      </section>

      <div class="section detail-desc">
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

          <div className="newcontainer" style={{ marginLeft: '-1%' }}>
            <div class="row bottom-mrg">
              <form class="add-feild" onSubmit={formik.handleSubmit}>
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Project Name"
                      name="projectName"
                      defaultValue={formik.values.projectName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Project Description"
                      name="projectDescription"
                      defaultValue={formik.values.projectDescription}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="row no-padd">
                  <div class="detail pannel-footer">
                    <div class="col-md-12 col-sm-12">
                      <div class="detail-pannel-footer-btn pull-right">
                        <button variant="contained" color="secondary" type="submit">
                          Save Project               
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="text-center text-muted">Step 3 / 6</p>
        </div>
      </div>
    </>
  );
};

export default Project;
