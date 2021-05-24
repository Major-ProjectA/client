import { createStore, createHook } from 'react-sweet-state';
import axios from 'axios';

const Store = createStore({
  initialState: {
    projectName:'',
    projectDescription:'',
  },

  actions: {
    stepProject: (data) => async ({ setState, getState }) => {
      setState({
        projectName: data.projectName,
        projectDescription: data.projectName,
      })
      const response = await axios.patch(`http://localhost:5000/api/cvs/updateProject/${data.projectId}`, data);
      console.log(response)
    },
  },
});

export const useProject = createHook(Store);