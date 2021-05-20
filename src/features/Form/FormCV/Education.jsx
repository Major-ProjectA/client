import React from 'react';
import { useCV } from '../../../components/Store/CV';
import { useFormCV } from '../../../components/Store/Education';
import { useFormik } from 'formik';

const Education = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useFormCV();
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
      };
      await formActions.stepEducation(data)
    },
  });
  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Education Details</h1>
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
                      placeholder="College"
                      name="collegeName"
                      defaultValue={formik.values.collegeName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="College Major"
                      name="collegeMajor"
                      defaultValue={formik.values.collegeMajor}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-12 col-sm-12">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="College Qualification"
                      name="collegeQualification"
                      defaultValue={formik.values.collegeQualification}
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
                      placeholder="School"
                      name="schoolName"
                      defaultValue={formik.values.schoolName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="School Major"
                      name="schoolMajor"
                      defaultValue={formik.values.schoolMajor}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-12 col-sm-12">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="School Qualification"
                      name="schoolQualification"
                      defaultValue={formik.values.schoolQualification}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div class="row no-padd">
                  <div class="detail pannel-footer">
                    <div class="col-md-12 col-sm-12">
                      <div class="detail-pannel-footer-btn pull-right">
                        <button variant="contained" color="secondary" type="submit">
                          Save Education               
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="text-center text-muted">Step 2 / 6</p>
        </div>
      </div>
    </>
  );
};

export default Education;
