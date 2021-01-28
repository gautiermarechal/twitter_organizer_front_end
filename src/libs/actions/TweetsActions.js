import apis from "../../api";

//Tweets actions
export const requestTweetsByCategory = () => ({
  type: "REQUEST_TWEETS_BY_CATEGORY",
});

export const receiveTweetsByCategory = (data) => ({
  type: "RECEIVE_TWEETS_BY_CATEGORY",
  data,
});

export const errorTweetsByCategory = () => ({
  type: "ERROR_TWEETS_BY_CATEGORY",
});

export const setCurrentCategory = (data) => ({
  type: "SET_CURRENT_CATEGORY",
  data,
});

export const toggleFollowCurrentCategory = (data) => ({
  type: "TOGGLE_FOLLOW_CURENT_CATEGORY",
  data: data,
});

export const asyncFollowCurrentCategory = (currentCategory, userId) => {
  return (dispatch) => {
    apis.followCategory(userId, currentCategory).then(() => {
      dispatch(toggleFollowCurrentCategory(true));
    });
  };
};

export const asyncUnFollowCurrentCategory = (currentCategory, userId) => {
  return (dispatch) => {
    apis.unFollowCategory(userId, currentCategory).then(() => {
      dispatch(toggleFollowCurrentCategory(false));
    });
  };
};
