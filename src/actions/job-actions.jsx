import {
  FETCH_ALL_JOB,
  // CREATE,
  // UPDATE,
  // DELETE,
  // LIKE,
} from "../constants/actionTypes";

import * as api from "../api";

//ACTION GETJOB
export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobs();

    dispatch({ type: FETCH_ALL_JOB, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// //ACTION CREATE
// export const createJob = (job) => async (dispatch) => {
//   try {
//     const { data } = await api.createJob(job);

//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const likePost = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);

//     dispatch({ type: LIKE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePost = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
