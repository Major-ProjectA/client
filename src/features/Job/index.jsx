import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';

import Navbars from '../../components/Navbars';
import Footer from '../../components/Footers';
import JobList from './JobList';
import Filters from './Filters';
import LoadMore from './LoadMore';
// import Loading from '../Loading';

function ListPage() {
  const state = useContext(GlobalState);
  const [jobs] = state.jobAPI.jobs;
  // console.log(jobs);

  // const [error, setError] = useState(false);
  // const [page, setPage] = useState(pageNumber);
  // const [pages, setPages] = useState(1);

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
  //   const getJobs = async () => {
  //     const res = await axios.get(`/api/jobs/get`);
  //     setFetchJobs(res.data.jobs);
  //   };
  //   getJobs();
  // }, []);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(`api/jobs?page=${page}`);
  //       const { data, pages: totalPages } = await res.json();

  //       setPages(totalPages);
  //       setFetchJobs(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //       setError('Some error occured');
  //     }
  //   };

  //   fetchJobs();
  // }, [page]);

  return (
    <>
      {
        // loading ? (
        //   <h3 className="loading-text" style={{ fontSize: '2rem', textAlign: 'center' }}>
        //     Loading...
        //   </h3>
        // ) : error ? (
        //   <h3 className="error-text" style={{ fontSize: '2rem', textAlign: 'center' }}>
        //     {error}
        //   </h3>
        // ) : (

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
          <section class="brows-job-category">
            <div class="container">
              <Filters />
              <div class="item-click">
                {jobs.map((job) => {
                  return <JobList key={job._id} job={job} />;
                })}
              </div>

              <LoadMore />
            </div>
          </section>
          <Footer />
        </>
      }
    </>
  );
}

export default ListPage;
