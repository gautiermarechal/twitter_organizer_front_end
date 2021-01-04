export const requestTweetsBookmarked = (data) => ({
  type: "REQUEST_BOOKMARKED_TWEETS",
  data,
});

export const receiveTweetsBookmarked = (data) => ({
  type: "RECEIVE_BOOKMARKED_TWEETS",
  data,
});

export const errorTweetsBookmarked = (data) => ({
  type: "ERROR_BOOKMARKED_TWEETS",
  data,
});
