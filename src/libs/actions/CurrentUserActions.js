import apis, { followAuthor } from "../../api";

//Login actions
export const requestUserLogIn = () => ({
  type: "REQUEST_USER_LOGIN",
});

export const userLogIn = (data) => ({
  type: "USER_LOG_IN",
  data,
});

export const errorUserLogIn = (data) => ({
  type: "ERROR_USER_LOG_IN",
  data,
});

export const bookmarkTweet = (data) => ({
  type: "BOOKMARK_TWEET",
  data,
});

export const asyncBookmarkTweet = (userid, tweetid) => {
  return (dispatch) => {
    apis.bookmarkTweet(userid, tweetid).then(() => {
      dispatch(bookmarkTweet(tweetid));
    });
  };
};

export const deleteBookmarkTweet = (data) => ({
  type: "DELETE_BOOKMARK_TWEET",
  data,
});

export const asyncDeleteBookmarkTweet = (userid, tweetid) => {
  return (dispatch) => {
    apis.unBookmarkTweet(userid, tweetid).then(() => {
      dispatch(deleteBookmarkTweet(tweetid));
    });
  };
};

export const followUser = (data) => ({
  type: "FOLLOW_AUTHOR",
  data,
});

export const asyncFollowUser = (currentuserid, userid) => {
  return (dispatch) => {
    apis.followAuthor(currentuserid, userid).then(() => {
      dispatch(followUser(userid));
    });
  };
};

export const unFollowUser = (data) => ({
  type: "UNFOLLOW_AUTHOR",
  data,
});

export const asyncUnFollowUser = (currentuserid, userid) => {
  return (dispatch) => {
    apis.unFollowAuthor(currentuserid, userid).then(() => {
      dispatch(unFollowUser(userid));
    });
  };
};
