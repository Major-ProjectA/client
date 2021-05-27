import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    cvId: '',
    profileId: '',
    educationId: '',
    projectId: '',
    experienceId: '',
    extraId: '',
  },
  actions: {
    saveCvId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            cvId: id,
          });
        },
    saveProfileId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            profileId: id,
          });
        },
    saveEducationId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            educationId: id,
          });
        },
    saveProjectId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            projectId: id,
          });
        },
    saveExperienceId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            experienceId: id,
          });
        },
    saveExtraId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            extraId: id,
          });
        },
  }
});

export const useCV = createHook(Store);