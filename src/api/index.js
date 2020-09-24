import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createUser = (payload) => api.post("/user", payload);
export const getAllUsers = () => api.get("/users");
export const getUserByID = (id) => api.get(`/user/${id}`);
export const updateUser = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUser = (id) => api.delete(`/user/${id}`);

export const createOrganizedTweet = (payload) =>
  api.post(`/tweet-organized`, payload);
export const getTweetByID = (id) => api.get(`/tweet-organized/${id}`);
export const getTweetByCategory = (category) => api.get(`/tweets/${category}`);
export const getAllTweets = () => api.get(`/tweets`);
export const deleteTweet = (id) => api.delete(`/tweet-organized/${id}`);
export const updateTweet = (id, payload) =>
  api.put(`/tweet-organized/${id}`, payload);

const apis = {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
  createOrganizedTweet,
  getTweetByID,
  getAllTweets,
  deleteTweet,
  updateTweet,
  getTweetByCategory,
};

export default apis;
