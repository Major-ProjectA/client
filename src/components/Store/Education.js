import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    education: [],
  },

  actions: {
    stepEducation: (data) => async ({ setState, getState }) => {
<<<<<<< HEAD
<<<<<<< HEAD
      // setState({
      //   education: data.education,
      // })
      await axios.patch(`http://localhost:5000/api/cvs/updateEducation/${data.educationId}`, getState());
    },
    addEdu: (data) => ({ setState, getState }) => {
      console.log(data)
      setState({
        education : [...getState().education, data]
      })
=======
=======
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
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
>>>>>>> 0344f914bda5140a9e4876dd02e788c962450f0b
    },
  },

});

export const useEducation = createHook(Store);