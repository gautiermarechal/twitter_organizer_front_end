import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import apis from "../api";
import TweetsGrid from "./TweetsGrid";

const TweetsBookmarked = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [tweetsBookmarked, setTweetsBookmarked] = useState([]);
  useEffect(() => {
    if (currentUser.status === "notLoggedIn") {
      return;
    }
    apis
      .getBookmarkedTweets(parseInt(currentUser.currentUser.id))
      .then((res) => {
        console.log(res);
        setTweetsBookmarked(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser]);
  return (
    <>
      <TweetsGrid tweets={tweetsBookmarked} />
    </>
  );
};

export default TweetsBookmarked;
