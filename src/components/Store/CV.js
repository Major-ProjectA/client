import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    cvId: '',
  },
  actions: {
    saveCvId:
      (id) =>
        ({ setState, getState }) => {
          setState({
            cvId: id,
          });
        },
  }
});

export const useCV = createHook(Store);
