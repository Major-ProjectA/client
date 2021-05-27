import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    education: [],
  },

  actions: {
    stepEducation: (data) => async ({ setState, getState }) => {
      // setState({
      //   education: data.education,
      // })
      await axios.patch(`http://localhost:5000/api/cvs/updateEducation/${data.educationId}`, getState());
      console.log(getState())
    },
    addEdu: (data) => ({ setState, getState }) => {
      setState({
        education : [...getState().education, data]
      })
    },
    updateEdu : (index, data) => ({ setState, getState }) => {
      let newArr = [...getState().education];
      newArr[index] = data;
      setState({
        education : newArr,
      })
    },
    deleteEdu : (index, data) => ({ setState, getState }) => {
      console.log(data)
      let newArr = [...getState().education];
      newArr[index] = data;
      newArr.splice(index,1);
      setState({
        education : newArr,
      })
    }
  },

});

export const useEducation = createHook(Store);