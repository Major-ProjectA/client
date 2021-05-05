import axiosCategory from './axiosCategory';

const categoryApi = {
  getAllCategory(params) {
    const urlCategory = '/categories';
    return axiosCategory.get(urlCategory, { params });
  },
};

export default categoryApi;
