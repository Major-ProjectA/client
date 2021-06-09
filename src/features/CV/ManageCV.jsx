import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Context/AuthContext';
import { useHttpClient } from '../../components/Hooks/Http-hook';
import Swal from 'sweetalert2';

const ManageCV = (props) => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [loadedCvs, setLoadedCvs] = useState([]);
  const [callback, setCallBack] = useState(false);

  useEffect(() => {
    const fetchCvs = async () => {
      try {
        const responseData = await sendRequest(`http://localhost:5000/api/cvs/user/${auth.userId}`);
        const data = responseData.cvs;
        setLoadedCvs(data);
        setCallBack(!callback);
      } catch (error) {}
    };
    fetchCvs();
  }, [callback]);

  const onView = async (cv) => {
    try {
      await sendRequest(`http://localhost:5000/api/cvs/${cv}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdate = async (cv) => {
    try {
      await sendRequest(`http://localhost:5000/api/cvs/${cv}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (cv) => {
    try {
      await axios.delete(`http://localhost:5000/api/cvs/${cv}`);
      setCallBack(!callback);
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Deleted.',
      });
    }
  };

  return !loadedCvs.length ? (
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
      <div className="main-heading">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4>You do not have any cvs!</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  ) : (
    <h4>
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
                              <Link to={`/cvs/updatecv/${cv.id}`}>
                                <a onClick={onUpdate}>Edit</a>
                              </Link>
                              <a
                                onClick={() => {
                                  onDelete(cv.id);
                                }}
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="paid-candidate-inner--box">
                          <div class="paid-candidate-box-thumb">
                            <img src={cv.cvImage} class="img-responsive img-circle" alt="" />
                          </div>
                          <div class="paid-candidate-box-detail">
                            <h4>{cv.cvName}</h4>
                          </div>
                        </div>
                      </div>
                      <Link to={`/cvs/details/${cv.id}`}>
                        <a class="btn btn-paid-candidate bt-1" onClick={onView}>
                          View Detail
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </h4>
  );
};

export default ManageCV;
