import React from 'react';
import { useCV } from '../../../components/Store/CV';
import { useFormik } from 'formik';

const CvName = (props) => {
  const [cvState, cvActions] = useCV();
  const formik = useFormik({
    initialValues: {
      cvName: '',
    },

    onSubmit: async (values) => {
      const data = {
        cvName: values.cvName,
        cvId: cvState.cvId,
      };
      await cvActions.updateCvName(data)
      console.log(data)
      props.history.push('/createcv-profile');
    },
  });

  return (
    <>
    <br/><br/><br/><br/><br/><br/><br/>
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
                </div>

                <div class="col-md-4 col-sm-6">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your cv name."
                      required
                      name="cvName"
                      defaultValue={cvState.cvName}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                
                <div class="col-md-4 col-sm-6">
                </div>

                <div class="detail pannel-footer">
                  <div class="col-md-12 col-sm-12">
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
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CvName;