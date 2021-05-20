import React from 'react';
import { useCV } from '../../../components/Store/CV';
import { useFormCV } from '../../../components/Store/Profile';
import { useFormik } from 'formik';

const Profile = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useFormCV();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
    },

    onSubmit: async (values) => {
      const data = {
        firstname: values.firstname,
        lastname: values.lastname,
        dob: values.dob,
        email: values.email,
        address: values.address,
        phone: values.phone,
        cvId: cvState.cvId,
      };
      await formActions.stepProfile(data)
    },
  });

  return (
    <>
      <section class="inner-header-title blank">
        <div class="container">
          <h1>Create Profile</h1>
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
                      name="firstname"
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      defaultValue={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      name="lastname"
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                      defaultValue={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      name="dob"
                      type="date"
                      class="form-control"
                      placeholder="Date of Birth"
                      defaultValue={formik.values.dob}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      name="phone"
                      type="phone"
                      class="form-control"
                      placeholder="Phone"
                      defaultValue={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      name="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      defaultValue={formik.values.email}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-6 col-sm-6">
                  <div class="input-group">
                    <input
                      name="address"
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      defaultValue={formik.values.address}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="row no-padd">
                  <div class="detail pannel-footer">
                    <div class="col-md-12 col-sm-12">
                      <div class="detail-pannel-footer-btn pull-right">
                        <button variant="contained" color="secondary" type="submit">
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="text-center text-muted">Step 1 / 6</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
