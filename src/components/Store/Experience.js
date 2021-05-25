import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    companyName: '',
    duration: '',
    position: '',
    expDescription: '',
  },

  actions: {
    stepExperience: (data) => async ({ setState, getState }) => {
      setState({
<<<<<<< HEAD
<<<<<<< HEAD
        companyName: data.companyName,
=======
        companyName: data.projectName,
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
=======
        companyName: data.projectName,
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
        duration: data.duration,
        position: data.position,
        expDescription: data.expDescription,
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateExperience/${data.experienceId}`, data);
      console.log(response)
    },
  },
});

export const useExperience = createHook(Store);