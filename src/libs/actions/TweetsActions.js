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
