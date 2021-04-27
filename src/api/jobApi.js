import axiosJob from './axiosJob';

const jobApi = {
  getAllJob(params) {
    const urlJob = '/';
    return axiosJob.get(urlJob, { params });
  },

  // getCompany(id) {
  //   const urlCompany = `/${id}`;
  //   return axiosCompany.get(urlCompany);
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
