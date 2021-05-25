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
      setState({
        collegeName: data.collegeName,
        collegeMajor: data.collegeMajor,
        collegeQualification: data.collegeQualification,
        schoolName: data.schoolName,
        schoolMajor: data.schoolMajor,
        schoolQualification: data.schoolQualification,
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateEducation/${data.educationId}`, data);
      console.log(response)
    },
  },
});

export const useEducation = createHook(Store);