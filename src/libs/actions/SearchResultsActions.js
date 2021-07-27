//Extended Tweet actions
export const requestSearchResults = () => ({
  type: "REQUEST_SEARCH_RESULTS",
});

export const getSearchResults = (data) => {
  return {
    type: "GET_SEARCH_RESULTS",
    categoriesResults: data.categoriesResults,
    organizerUserResults: data.organizerUserResults,
    tweetOrganizedResults: data.tweetOrganizedResults,
    twitterUserResults: data.twitterUserResults,
  };
};

export const errorSearchResults = () => ({
  type: "ERROR_SEARCH_RESULTS",
});
