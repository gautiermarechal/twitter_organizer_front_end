import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  errorUserPage,
  receiveUserPage,
  requestUserPage,
} from "../actions/UserPageActions";

const useFetchCurrentUserProfile = (username) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(requestUserPage());
    try {
      axios
        .get(`http://localhost:5000/twitter-api/user/${username}`)
        .then((res) => {
          console.log(res);
          dispatch(receiveUserPage(res));
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(errorUserPage());
        });
    } catch (error) {
      dispatch(errorUserPage());
    }
  }, []);
};

export default useFetchCurrentUserProfile;
