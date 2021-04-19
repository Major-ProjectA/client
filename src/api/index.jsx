import axios from "axios";
const url = "http://localhost:5000/jobs";

export const fetchJobs = () => axios.get(url);

export const createJob = (newJob) => axios.post(url, newJob);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// export const updatePost = (id, updatedPost) =>

//   axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);
