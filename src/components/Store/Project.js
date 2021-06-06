import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    project: [],
  },

  actions: {
    stepProject: (data) => async ({ setState, getState }) => {
      await axios.patch(`http://localhost:5000/api/cvs/updateProject/${data.projectId}`, getState());
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
    deleteProject: (index) => ({ setState, getState }) => {
      let newArr = [...getState().project];
      newArr.splice(index, 1)
      setState({
        project: newArr
      })
    }
  },
});

export const useProject = createHook(Store);