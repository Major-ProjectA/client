import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    addInfor: '',
  },

  actions: {
    stepExtra: (data) => async ({ setState, getState }) => {
      setState({
        addInfor: data.addInfor,
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateExtra/${data.extraId}`, data);
      console.log(response)
    },
  },
});

export const useExtra = createHook(Store);