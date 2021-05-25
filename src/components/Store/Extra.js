import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    addInfor:'',
  },

  actions: {
    stepExtra: (data) => async ({ setState, getState }) => {
      setState({
<<<<<<< HEAD
<<<<<<< HEAD
        addInfor: data.addInfor,
=======
        skill: data.skill,
        interest: data.interest,
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
=======
        skill: data.skill,
        interest: data.interest,
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateExtra/${data.extraId}`, data);
      console.log(response)
    },
  },
});

export const useExtra = createHook(Store);