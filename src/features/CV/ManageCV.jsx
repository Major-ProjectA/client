import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/Context/AuthContext';
import { useHttpClient } from '../../components/Hooks/Http-hook';
// import {GlobalState} from "../../GlobalState"

const ManageCV = (props) => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [loadedCvs, setLoadedCvs] = useState([]);

  useEffect(() => {
    const fetchCvs = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/cvs/user/${auth.userId}`);
        const data = responseData.cvs;
        setLoadedCvs(data);
        console.log(data);
      } catch (error) {}
    };
    fetchCvs();
  }, [sendRequest]);

  const onDeleteHandler = async (cv) => {
    try {
      await sendRequest(`http://localhost:5000/api/cvs/${cv}`, 'DELETE');
    } catch {}
  };

  return (
    <>
      <section
        class="inner-header-title blank"
        style={{
          backgroundImage: `URL("https://www.mediafire.com/convkey/94a5/ld2xj8f54j7colg6g.jpg")`,
        }}
      >
        <div class="container">
          <h1>MANAGE CV</h1>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            {loadedCvs.map((cv) => {
              return (
                <>
                  <div class="col-md-4 col-sm-6">
                    <div class="paid-candidate-container">
                      <div class="paid-candidate-box">
                        <div class="dropdown">
                          <div class="btn-group fl-right">
                            <button
                              type="button"
                              class="btn-trans"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="fa fa-gear"></i>
                            </button>
                            <div class="dropdown-menu pull-right animated flipInX">
                              <a
                                onClick={() => {
                                  onDeleteHandler(cv.id);
                                }}
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="paid-candidate-inner--box">
                          <div class="paid-candidate-box-thumb">
                            <img src="assets/img/client-1.jpg" class="img-responsive img-circle" alt="" />
                          </div>
                          <div class="paid-candidate-box-detail">
                            <h4>{cv.cvName}</h4>
                            <p>{cv.id}</p>
                            <p>{cv.profile}</p>
                          </div>
                        </div>
                      </div>

                      <a href="#" class="btn btn-paid-candidate bt-1">
                        View Detail
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageCV;