import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createUser = (payload) => api.post("/user", payload);
export const getAllUsers = () => api.get("/users");
export const getUserByID = (id) => api.get(`/user/${id}`);
export const getUserByEmail = (email) => api.get(`/user/email/${email}`);
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
export const bookmarkTweet = (userid, tweetid) =>
  api.patch(`/tweets/bookmark/${userid}/${tweetid}`);
export const unBookmarkTweet = (userid, tweetid) =>
  api.delete(`/tweets/bookmark/${userid}/${tweetid}`);
export const getBookmarkedTweets = (userid) =>
  api.get(`/tweets/bookmark/${userid}`);
export const getAllTweetsFromUser = (userid) =>
  api.get(`/tweet-organized/user/${userid}`);
export const followAuthor = (currentuserid, userid) =>
  api.patch(`/user/follow/${currentuserid}/${userid}`);
export const unFollowAuthor = (currentuserid, userid) =>
  api.delete(`/user/follow/${currentuserid}/${userid}`);
export const followCategory = (currentuserid, categoryName) =>
  api.patch(`/category/follow/${currentuserid}/${categoryName}/`);
export const unFollowCategory = (currentuserid, categoryName) =>
  api.delete(`/category/unfollow/${currentuserid}/${categoryName}/`);
export const getFollowedCategories = (userid) => {
  api.get(`/category/followed/${userid}`);
};
export const getUserFeed = (userid) => {
  api.get(`/feed/${userid}`);
};
export const getAllCategories = (limit) => {
  if (limit) {
    return api.get(`/categories?limit=${limit}`);
  } else {
    return api.get("/categories");
  }
};
export const searchCategories = (query) => api.get(`/categories/${query}`);

const apis = {
  createUser,
  getAllUsers,
  getUserByID,
  getUserByEmail,
  updateUser,
  deleteUser,
  createOrganizedTweet,
  getTweetByID,
  getAllTweets,
  deleteTweet,
  updateTweet,
  getTweetByCategory,
  bookmarkTweet,
  getBookmarkedTweets,
  unBookmarkTweet,
  getAllTweetsFromUser,
  followAuthor,
  unFollowAuthor,
  followCategory,
  unFollowCategory,
  getFollowedCategories,
  getUserFeed,
  getAllCategories,
  searchCategories,
};

export default apis;
