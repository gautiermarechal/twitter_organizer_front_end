//Tweets actions
export const requestTweetsByCategory = () => ({
  type: "REQUEST_TWEETS_BY_CATEGORY",
});

export const failureTweetsByCategory = () => ({
  type: "FAILURE_TWEETS_BY_CATEGORY",
});

export const receiveTweetsByCategory = (data) => ({
  type: "RECEIVE_TWEETS_BY_CATEGORY",
  data,
});

export const setCurrentCategory = (data) => ({
  type: "SET_CURRENT_CATEGORY",
  data,
});

//Extended Tweet actions
export const getExtendedTweet = (data) => ({
  type: "GET_EXTENDED_TWEET",
  data,
});
