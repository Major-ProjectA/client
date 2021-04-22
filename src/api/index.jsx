import axios from "axios";

const urlJob = "http://localhost:5000/api/jobs";

export const fetchJobs = () => axios.get(urlJob);

// export const createJob = (newJob) => axios.post(urlJob, newJob);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) =>
//   axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
