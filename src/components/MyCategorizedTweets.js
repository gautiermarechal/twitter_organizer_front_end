import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TweetsGrid from "./TweetsGrid";
import { useSelector } from "react-redux";
import apis from "../api";

const MyCategorizedTweets = () => {
  const [tweets, setTweets] = useState([]);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    apis.getAllTweetsFromUser(currentUser.currentUser.id).then((res) => {
      console.log(res);
      setTweets(res.data.data);
    });
  }, [currentUser]);

  return (
    <>
      {tweets ? (
        tweets.length !== 0 ? (
          <TweetsGrid tweets={tweets} />
        ) : (
          <Notweets>No tweets categorized yet</Notweets>
        )
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

const Notweets = styled.div`
  color: white;
  width: 100%;
  text-align: center;
`;

export default MyCategorizedTweets;
