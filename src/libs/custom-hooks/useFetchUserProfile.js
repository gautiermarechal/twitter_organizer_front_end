import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  errorUserPage,
  receiveUserPage,
  requestUserPage,
} from "../actions/UserPageActions";
import apis from "../../api";

const useFetchCurrentUserProfile = (username) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestUserPage());
    try {
      axios
        .get(`http://localhost:5000/twitter-api/user/${username}`)
        .then((res) => {
          dispatch(receiveUserPage({ ...res.data.data, tweetsOrganized: [] }));

          apis.getAllTweetsFromUser(username).then((responseTweets) => {
            dispatch(
              receiveUserPage({
                ...res.data.data,
                tweetsOrganized: responseTweets.data.data,
              })
            );
          });
        })
        .catch((err) => {
          console.error(err.message);
          dispatch(errorUserPage());
        });
    } catch (error) {
      dispatch(errorUserPage());
    }
  }, []);
};

export default useFetchCurrentUserProfile;
