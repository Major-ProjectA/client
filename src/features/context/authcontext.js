import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin : false,
  isEmployer: false,
  userId:null,
  username:null,
  authorization: () => {},
  login: () => {},
  logout: () => {}
});