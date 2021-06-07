import React, { createContext } from 'react';
import JobAPI from './api/jobApi';
import CategoriesAPI from './api/CategoriesAPI';
import UserAPI from './api/UserAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    jobAPI: JobAPI(),
    categoriesAPI: CategoriesAPI(),
    userAPI: UserAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
