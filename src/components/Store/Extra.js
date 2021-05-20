import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    skill:'',
    interest:'',
  },

  actions: {
    stepExtra: (data) => async ({ setState, getState }) => {
      const response = await axios.post('http://localhost:5000/api/cvs/createExtra', data);
      console.log(response)
    },
  },
});

export const useFormCV = createHook(Store);