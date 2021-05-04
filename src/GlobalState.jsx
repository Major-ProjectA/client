import React, { createContext, useState } from 'react';
import JobAPI from './api/JobAPI';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    jobAPI: JobAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
