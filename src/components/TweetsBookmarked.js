import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import apis from "../api";
import {
  errorTweetsBookmarked,
  receiveTweetsBookmarked,
  requestTweetsBookmarked,
} from "../libs/actions/BookmarkedTweetsActions";
import LoadingSpinner from "./LoadingSpinner";
import TweetsGrid from "./TweetsGrid";

const TweetsBookmarked = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const tweetsBookmarked = useSelector((state) => state.bookmarkedTweets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTweetsBookmarked());
    if (currentUser.status === "notLoggedIn") {
      return;
    }
    apis
      .getBookmarkedTweets(currentUser.currentUser.id)
      .then((res) => {
        dispatch(receiveTweetsBookmarked(res.data.data));
      })
      .catch(() => dispatch(errorTweetsBookmarked()));
  }, [currentUser]);
  return (
    <>
      {tweetsBookmarked.status === "received" ? (
        tweetsBookmarked.tweets.length !== 0 ? (
          <>
            <TweetsGrid tweets={tweetsBookmarked.tweets} />
          </>
        ) : (
          <>
            <EmptyState>No tweets bookmarked</EmptyState>
          </>
        )
      ) : (
        <EmptyState>
          <LoadingSpinner />
        </EmptyState>
      )}
    </>
  );
};

const EmptyState = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default TweetsBookmarked;
