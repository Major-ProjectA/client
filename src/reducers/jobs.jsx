import {
  FETCH_ALL_JOB,
  // CREATE,
  // UPDATE,
  // DELETE,
  // LIKE,
} from "../constants/actionTypes";

export default (jobs = [], action) => {
  switch (action.type) {
    case FETCH_ALL_JOB:
      return action.payload;
    // case LIKE:
    //   return posts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case CREATE:
    //   return [...jobs, action.payload];
    // case UPDATE:
    //   return posts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload);
    default:
      return jobs;
  }
};
