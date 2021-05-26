import React, { useEffect } from 'react';
import { useCV } from '../../../components/Store/CV';
import { useExtra } from '../../../components/Store/Extra';
import { useFormik } from 'formik';
import axios from 'axios';

const Extras = (props) => {
    const [cvState, cvActions] = useCV();
    const [formState, formActions] = useExtra();
    const formik = useFormik({
      initialValues: {
        addInfor: '',
      },
  
      onSubmit: async (values) => {
        const data = {
          addInfor: values.addInfor,
  
          cvId: cvState.cvId,
          extraId: cvState.extraId,
        };
        await formActions.stepExtra(data)
        props.history.push('/createcv-review');
      },
    });
  
    useEffect(() => {
      if (!cvState.extraId) {
        const fetch = async () => {
          const extra = await axios.post(`http://localhost:5000/api/cvs/createExtra/${cvState.cvId}`); //create empty CV
          cvActions.saveExtraId(extra.data.cv._id);
        }
        fetch();
      } else {
        return () => formik.handleSubmit;
      }
    }, [cvState.cvId])

  const previous = (data) => {
    console.log(data);
    props.history.push('/createcv-experience');
  };

  return (
    <>
      <section class="full-detail">
        <form onSubmit={formik.handleSubmit}>
          <div class="container">
            <div class="row bottom-mrg extra-mrg">
              <h2 class="detail-title">Extras Details</h2>

              <div class="col-md-12 col-sm-6">
                <label>Additional Information</label>
                <div class="input-group">
                  <textarea
                  class="form-control"
                  placeholder="Describe some your skills or hobbies."
                  required
                  name="addInfor"
                  defaultValue={formState.addInfor}
                  onChange={formik.handleChange}
                  >
                  </textarea>
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

export default Extras;