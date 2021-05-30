import React, { createContext } from 'react';
import JobAPI from './api/jobApi';
import CategoriesAPI from './api/CategoriesAPI';
// import CvAPI from './api/cvAPI'

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    jobAPI: JobAPI(),
    categoriesAPI: CategoriesAPI(),
    // cvAPI: CvAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
