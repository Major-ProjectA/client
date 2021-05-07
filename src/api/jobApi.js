import { useState, useEffect } from 'react';
import axios from 'axios';

function JobAPI() {
  const [jobs, setJobs] = useState([]);
  const [jobhot, setJobHot] = useState([]);
  const [callback, setCallBack] = useState(false);
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/api/jobs?limit=${page * 6}&${category}&${sort}&position[regex]=${search}`);
      setJobs(res.data.jobs);
      setResult(res.data.result);
      // console.log(res.data.jobs);
      // console.log(res);
    };
    getJobs();
  }, [category, location, search, page]);

  useEffect(() => {
    const getJobHot = async () => {
      const res = await axios.get(`/api/jobs/jobhot?limit=${page * 3}&salary.to[regex]=1000`);
      setJobHot(res.data.jobhot);
      // setResult(res.data.result);;
      // console.log(res);
    };
    getJobHot();
  }, [page]);

  return {
    jobs: [jobs, setJobs],
    jobhot: [jobhot, setJobHot],
    callback: [callback, setCallBack],
    category: [category, setCategory],
    sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    location: [location, setLocation],
    result: [result, setResult],
  };
}

export default JobAPI;
