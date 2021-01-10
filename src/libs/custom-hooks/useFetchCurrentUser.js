import { useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../../api/index";
import { userLogIn } from "../actions/CurrentUserActions";

const useFetchCurrentUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("useremail")) {
      api.getUserByEmail(localStorage.getItem("useremail")).then((res) => {
        const user = res.data[0];
        dispatch(
          userLogIn({
            id: user.id,
            email: user.email,
            tweetsBookmarked: user.tweets_bookmarked
              ? user.tweets_bookmarked
              : [],
          })
        );
      });
    }
  }, []);
};

export default useFetchCurrentUser;
