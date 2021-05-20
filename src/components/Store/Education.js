import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    collegeName: '',
    collegeMajor: '',
    collegeQualification: '',

    schoolName: '',
    schoolMajor: '',
    schoolQualification: '',
  },

  actions: {
    stepEducation: (data) => async ({ setState, getState }) => {
      const response = await axios.post('http://localhost:5000/api/cvs/createEducation', data);
      console.log(response)
    },
  },
});

export const useFormCV = createHook(Store);