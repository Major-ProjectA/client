import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    skill:'',
    interest:'',
  },

  actions: {
    stepExtra: (data) => async ({ setState, getState }) => {
      setState({
        skill: data.skill,
        interest: data.interest,
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateExtra/${data.extraId}`, data);
      console.log(response)
    },
  },
});

export const useExtra = createHook(Store);