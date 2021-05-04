import { useState, useEffect } from 'react';
import axios from 'axios';

function JobAPI() {
  const [jobs, setJobs] = useState([]);
  // const [callback, setCallBack] = useState(false);

  const [location, setLocation] = useState('');
  // const [categories, setCategories] = useState('');
  // const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // const [result, setResult] = useState(0);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/api/jobs?limit=${page * 6}&position[regex]=${search}`);
      setJobs(res.data.jobs);
      // setJobs(res.data.result);
      // console.log(res.data.jobs);
    };
    getJobs();
  }, [search, page, location]);

  return {
    jobs: [jobs, setJobs],
    // callback: [callback, setCallBack],
    // categories: [categories, setCategories],
    // sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    location: [location, setLocation],
    // result: [result, setResult],
  };
}

export default JobAPI;
