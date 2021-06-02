import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    project: [],
  },

  actions: {
    stepProject: (data) => async ({ setState, getState }) => {
      // setState({
      //   projectName: data.projectName,
      //   projectDescription: data.projectName,
      // })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateProject/${data.projectId}`, getState());
      console.log(response)
    },
    addProject: (data) => ({ setState, getState }) => {
      setState({
        project: [...getState().project, data]
      })
    },
    updateProject: (index, data) => ({ setState, getState }) => {
      let newArr = [...getState().project];
      newArr[index] = data;
      setState({
        project: newArr,
      })
    },

    deleteProject: (index, data) => ({ setState, getState }) => {
      console.log(index)
      console.log(data)
      alert(index)
      let newArr = [...getState().project];
      newArr[index] = data;
      newArr.splice(index, 1)
      console.log(newArr)
      setState({
        project: newArr
      })

    }
  },
});

export const useProject = createHook(Store);