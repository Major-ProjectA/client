import React from 'react';
import { useCV } from '../../../components/Store/CV';
import { useFormCV } from '../../../components/Store/Experience';
import { useFormik } from 'formik';

const Experience = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useFormCV();
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
      };
      await formActions.stepExperience(data)
    },
  });
  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Experience Details</h1>
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
                      placeholder="Company"
                      name="companyName"
                      defaultValue={formik.values.companyName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Duration"
                      name="duration"
                      defaultValue={formik.values.duration}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-12 col-sm-12">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Position"
                      name="position"
                      defaultValue={formik.values.position}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <br/>
                <br/>
                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Experience Description"
                      name="expDescription"
                      defaultValue={formik.values.expDescription}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="row no-padd">
                  <div class="detail pannel-footer">
                    <div class="col-md-12 col-sm-12">
                      <div class="detail-pannel-footer-btn pull-right">
                        <button variant="contained" color="secondary" type="submit">
                          Save Experience               
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="text-center text-muted">Step 4 / 6</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
