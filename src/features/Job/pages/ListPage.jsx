import React, { useEffect, useState } from 'react';
import Navbars from '../../../components/Navbars';
import Footer from '../../../components/Footers';

// import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import jobApi from '../../../api/jobApi';
import JobList from '../components/JobList';

import Pagination from '../components/Pagination';

function ListPage({ match }) {
  //Get Api Jobs
  const [fetchJobs, setFetchJobs] = useState([]);

  const pageNumber = match.params.pageNumber || 1;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);

  //1> Pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [jobsPerPage] = useState(6);
  // const indexOfLastPost = currentPage * jobsPerPage;
  // const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  // const currentJobs = fetchJobs.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Search by Keywords
  // const [search, setSearch] = useState();
  // const [filteredJobs, setFilteredJobs] = useState([]);

  // useEffect(() => {
  //   const getJob = async () => {
  //     const res = await axios.get('http://localhost:5000/api/jobs');

  //     setFetchJobs(res.data);
  //   };
  //   getJob();
  // }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch('api/jobs?page=${page}');
        const { data, pages: totalPages } = await res.json();

        setPages(totalPages);
        setFetchJobs(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError('Some error occured');
      }
    };

    fetchJobs();
  }, [page]);

  return (
    <>
      {loading ? (
        <h3 className="loading-text" style={{ fontSize: '2rem', textAlign: 'center' }}>
          Loading...
        </h3>
      ) : error ? (
        <h3 className="error-text" style={{ fontSize: '2rem', textAlign: 'center' }}>
          {error}
        </h3>
      ) : (
        <>
          <Navbars />
          <br /> <br />
          <section
            class="inner-header-title"
            style={{
              backgroundImage: `URL("https://www.mediafire.com/convkey/3256/oy9yrpyhvvwgu8b6g.jpg")`,
            }}
          >
            <div class="container">
              <h1>Browse Jobs</h1>
            </div>
          </section>
          {/* <div class="clearfix"></div> */}
          <section class="brows-job-category">
            <div class="container">
              <div class="row extra-mrg">
                <div class="wrap-search-filter">
                  <form>
                    <div className="col-md-3 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skills, Designations, Keyword"
                        // onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>

                    {/* <div className="col-md-12 col-sm-6">
                      <button type="submit" className="btn btn-primary" style={{ float: 'right' }}>
                        Search Job
                      </button>
                    </div> */}

                    <div className="col-md-3 col-sm-6">
                      {/* <label>&nbsp;City:</label> */}
                      <select id="choose-city" className="form-control">
                        <option value="HCM">Ho Chi Minh</option>
                        <option value="HN">Ha Noi</option>
                      </select>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      {/* <label>&nbsp;Category</label> */}
                      <select className="form-control">
                        <option value="Journalist">Journalist</option>
                        <option value="realestate">Real estate</option>
                        <option value="it">Information technology</option>
                        <option value="sports">Sports</option>
                        <option value="bank">Bank</option>
                        <option value="spa">Spa</option>
                        <option value="guard-security">Guard - Security</option>
                        <option value="laborsafety">Labor safety</option>
                        <option value="sales-business">Sales - Business</option>
                        <option value="wholesale-retail">Wholesale - Retail</option>
                        <option value="lifeinsurance">Life insurance</option>
                        <option value="translators">Translators</option>
                        <option value="Post-telecommunication">Post - Telecommunication</option>
                        <option value="breed-veterinary">Breed - Veterinary</option>
                        <option value="stock">Stock</option>
                        <option value="biotechnology">Biotechnology</option>
                        <option value="nutrition">Nutrition</option>
                        <option value="mechanical">Mechanical</option>
                        <option value="oilandgas">Oil and gas</option>
                        <option value="textile">Textile</option>
                        <option value="tourism">Tourism</option>
                        <option value="pharmaceutical">pharmaceutical</option>
                        <option value="electronic">Electronic</option>
                        <option value="carpenter">Carpenter</option>
                        <option value="entertaiment">Entertaiment</option>
                        <option value="education">Education</option>
                        <option value="nautical">Nautical</option>
                        <option value="aviation">Aviation</option>
                        <option value="accountant">Accountant</option>
                        <option value="architecture">Architecture</option>
                        <option value="law">Law</option>
                        <option value="restauranthotel">Restaurant Hotel</option>
                      </select>
                    </div>

                    <div className="col-md-3 col-sm-6">
                      {/* <label>&nbsp;City:</label> */}
                      <select id="choose-filter" className="form-control">
                        <option value="HCM">Ascending</option>
                        <option value="HN">Descending</option>
                      </select>
                    </div>

                    {/* <div class="col-md-6 col-sm-6">
                      <div class="job-types">
                        <label>
                          <input type="checkbox" class="full-time check-option checkbox" CHECKED />
                          &nbsp;Full Time
                        </label>

                        <label>
                          <input type="checkbox" class="part-time check-option checkbox" />
                          &nbsp;Part Time
                        </label>

                        <label>
                          <input type="checkbox" class="freelancer check-option checkbox" />
                          &nbsp;Freelancer
                        </label>

                        <label>
                          <input type="checkbox" class="internship check-option checkbox" />
                          &nbsp; Internship
                        </label>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>

              <div class="item-click">
                <JobList data={fetchJobs} />
              </div>

              <div class="row">
                {/* <Pagination jobsPerPage={jobsPerPage} totalJobs={fetchJobs.length} paginate={paginate} /> */}

                <Pagination page={page} pages={pages} changePage={setPage} />
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}

export default ListPage;
