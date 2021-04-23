import axiosCategory from './axiosCategory';

const categoryApi = {
  getAllCategory(params) {
    const urlCategory = '/';
    return axiosCategory.get(urlCategory, { params });
  },

  // getCompany(id) {
  //   const urlCompany = `/${id}`;
  //   return axiosClient.get(urlCompany);
  // },

  // addCompany(data) {
  //   const urlCompany = '/addnew';
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

export default categoryApi;
