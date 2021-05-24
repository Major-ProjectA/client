import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useProfile } from '../../../components/Store/Profile';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Profile = (props) => {
  const [cvState, cvActions] = useCV();
  const [formState, formActions] = useProfile();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      dob: '',
      address: '',
    },

    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .max(20, 'Your first name is too long.')
        .required('Required'),
      lastname: Yup.string()
        .max(20, 'Your last name is too long.')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),

    onSubmit: async (values) => {
      const data = {
        firstname: values.firstname,
        lastname: values.lastname,
        dob: values.dob,
        email: values.email,
        address: values.address,
        phone: values.phone,
        cvId: cvState.cvId,
        profileId: cvState.profileId,
      };
      await formActions.stepProfile(data)
    },
  });

  useEffect(() => {
    if (!cvState.profileId) {
      const fetch = async () => {
        const profile = await axios.post(`http://localhost:5000/api/cvs/createProfile/${cvState.cvId}`); //create empty CV
        cvActions.saveProfileId(profile.data.cv._id);
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
          <h1>Create Profile</h1>
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
                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your first name."
                      required
                      name="firstname"
                      defaultValue={formState.firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.firstname && formik.touched.firstname && (<div>{formik.errors.firstname}</div>)}
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your last name."
                      required
                      name="lastname"
                      defaultValue={formState.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.lastname && formik.touched.lastname && <div>{formik.errors.lastname}</div>}
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email."
                      required
                      name="email"
                      defaultValue={formState.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.email && formik.touched.email && (<div>{formik.errors.email}</div>)}
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Enter your date of birth."
                      required
                      name="dob"
                      defaultValue={formState.dob}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Phone</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter your phone."
                      required
                      name="phone"
                      defaultValue={formState.phone}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your address."
                      required
                      name="address"
                      defaultValue={formState.address}
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
                <p className="text-center text-muted">Step 1 / 6</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;