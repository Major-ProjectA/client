import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    firstname:'',
    lastname:'',
    dob:'',
    phone:'',
    email:'',
    address:'',
  },

  actions: {
    stepProfile: (data) => async ({ setState, getState }) => {
      const response = await axios.post('http://localhost:5000/api/cvs/createProfile', data);
      console.log(response);
      setState({
        firstname: data.firstname,
        lastname: data.lastname,
        dob: data.dob,
        phone: data.phone,
        email: data.email,
        address: data.address,
      })
    },
  },
});

export const useFormCV = createHook(Store);