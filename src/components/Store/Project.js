import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    projectName:'',
    projectDescription:'',
  },

  actions: {
    stepProject: (data) => async ({ setState, getState }) => {
      const response = await axios.post('http://localhost:5000/api/cvs/createProject', data);
      console.log(response)
    },
  },
});

export const useFormCV = createHook(Store);