import axiosClient from "./axiosClient";

const companyApi = {
  getAllCompany(params) {
    const urlCompany = "/";
    return axiosClient.get(urlCompany, { params });
  },

  // getCompany(id) {
  //   const urlCompany = `/${id}`;
  //   return axiosClient.get(urlCompany);
  // },

  // addCompany(data) {
  //   const urlCompany = "/";
  //   return axiosClient.post(urlCompany, data);
  // },

  // updateCompany(data) {
  //   const urlCompany = `//${data.id}`;
  //   return axiosClient.patch(urlCompany, data);
  // },

  // removeCompany(id) {
  //   const urlCompany = `/${id}`;
  //   return axiosClient.delete(urlCompany);
  // },
};

export default companyApi;
