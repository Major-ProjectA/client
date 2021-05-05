import { useState, useEffect } from 'react';
import axios from 'axios';

function JobAPI() {
  const [jobs, setJobs] = useState([]);
  // const [callback, setCallBack] = useState(false);

  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  // const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  // const [result, setResult] = useState(0);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/api/jobs?limit=${page * 6}&${category}&position[regex]=${search}`);
      setJobs(res.data.jobs);
      // setJobs(res.data.result);
      // console.log(res.data.jobs);
    };
    getJobs();
  }, [page, category, search, location]);

  return {
    jobs: [jobs, setJobs],
    // callback: [callback, setCallBack],
    category: [category, setCategory],
    // sort: [sort, setSort],
    search: [search, setSearch],
    page: [page, setPage],
    location: [location, setLocation],
    // result: [result, setResult],
  };
}

export default JobAPI;
