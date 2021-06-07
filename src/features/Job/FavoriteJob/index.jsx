import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../components/Context/AuthContext';

function FavoriteJob() {
  const state = useContext(GlobalState);
  const [favorite, setFavorite] = state.userAPI.favorite;
  // const [users] = state.userAPI.users;
  console.log(favorite);
  const auth = useContext(AuthContext);
  console.log(auth.userId);

  // useEffect(() => {
  //   const getTotal = () => {
  //     const total = favorite.reduce((prev, item) => {
  //       return prev + item.price * item.quantity;
  //     }, 0);
  //     setTotal(total);
  //   };
  //   getTotal();
  // }, [favorite]);

  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="main-heading">
              <h2>
                Your Favorite <span>Jobs</span>
              </h2>
            </div>
            <div class="row extra-mrg">
              {favorite.map((job) => {
                /* <div key={job._id}>
             
            </div> */
                return (
                  <div class="col-md-3 col-sm-6">
                    <div class="grid-view brows-job-list">
                      <div class="brows-job-company-img">
                        <img src={job.imgCom} class="img-responsive" alt="" />
                      </div>
                      <div class="brows-job-position">
                        <h3>
                          <a href="job-detail.html">{job.nameCom}</a>
                        </h3>

                        <p>
                          <span>{job.position}</span>
                        </p>
                      </div>
                      {/* <div class="job-position">
                        <span class="job-num">5 Position</span>
                      </div> */}
                      <div class="brows-job-type">
                        <span class="part-time">{job.workingTime}</span>
                      </div>
                      <ul class="grid-view-caption">
                        <li>
                          <div class="brows-job-location">
                            <p>
                              <i class="fa fa-map-marker"></i>
                              <Link>View</Link>
                            </p>
                          </div>
                        </li>
                        <li>
                          <p>
                            <span class="brows-job-sallery">
                              <i class="fa fa-money"></i>
                              <Link>Remove</Link>
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FavoriteJob;
