import axiosJob from './axiosJob';

const jobApi = {
  getAllJob(params) {
    const urlJob = '/';
    return axiosJob.get(urlJob, { params });
  },

  getJob(id) {
    const urlJob = `/${id}`;
    return axiosJob.get(urlJob);
  },

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
