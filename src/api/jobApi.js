import axiosJob from './axiosJob';

const jobApi = {
  getAll(params) {
    const urlJob = '/jobs';
    return axiosJob.get(urlJob, { params });
  },

  // async getAll(params) {
  //   // Transform _page to _start
  //   const newParams = { ...params };
  //   newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
  //   // Remove un-needed key
  //   delete newParams._page;
  //   // Fetch product list + count
  //   const JobList = await axiosJob.get('/jobs', { params: newParams });
  //   const count = await axiosJob.get('/jobs/count', { params: newParams });
  //   // Build response and return
  //   return {
  //     data: JobList,
  //     pagination: {
  //       page: params._page,
  //       limit: params._limit,
  //       total: count,
  //     },
  //   };
  // },
  // getJob(id) {
  //   const urlJob = `/${id}`;
  //   return axiosJob.get(urlJob);
  // },
  // addCompany(data) {
  //   const urlCompany = '/addnew';
  //   return axiosCompany.post(urlCompany, data);
  // },
  // updateCompany(data) {
  //   const urlCompany = `//${data.id}`;
  //   return axiosCompany.patch(urlCompany, data);
  // },
  // removeCompany(id) {
  //   const urlCompany = `/${id}`;
  //   return axiosCompany.delete(urlCompany);
  // },
};

export default jobApi;
