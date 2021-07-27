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
      .getBookmarkedTweets(currentUser.currentUser.id)
      .then((res) => {
        setTweetsBookmarked(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);
  return (
    <>
      {tweetsBookmarked ? (
        tweetsBookmarked.length !== 0 ? (
          <TweetsGrid tweets={tweetsBookmarked} />
        ) : (
          <>
            <NoTweets>No tweets bookmarked</NoTweets>
          </>
        )
      ) : (
        <>
          <NoTweets>Loading</NoTweets>
        </>
      )}
    </>
  );
};

const NoTweets = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
`;

export default TweetsBookmarked;
