import axiosCompany from './axiosCompany';

const companyApi = {
  getAllCompany(params) {
    const urlCompany = '/';
    return axiosCompany.get(urlCompany, { params });
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

export default companyApi;
