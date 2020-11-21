//Extended Tweet actions
export const requestExtendedTweet = () => ({
  type: "REQUEST_EXTENDED_TWEET",
});

export const getExtendedTweet = (data) => ({
  type: "GET_EXTENDED_TWEET",
  data,
});

export const errorExtendedTweet = () => ({
  type: "ERROR_EXTENDED_TWEET",
});

export const getExtendedTweetId = (id) => ({
  type: "GET_ID_EXTENDED_TWEET",
  id,
});
