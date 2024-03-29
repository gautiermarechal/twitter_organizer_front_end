import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetsGrid = ({ tweets }) => {
  const currentUser = useSelector((state) => state.currentUser);
  useEffect(() => {
    if (currentUser.status === "notLoggedIn") {
      return;
    }
  }, [currentUser]);
  return (
    <>
      <MainGridContainer>
        {tweets &&
          tweets.map((element) => {
            if (element) {
              const tweetIDFormatted =
                `${element.tweet_organized_category}_` +
                element.tweet_organized_id;

              return (
                <Tweet
                  key={tweetIDFormatted}
                  id={element.tweet_organized_id}
                  userName={element.user_name}
                  userUserName={element.user_screen_name}
                  userImageUrl={element.user_image_url}
                  tweetCategory={element.tweet_organized_category}
                  tweetDate={element.tweet_organized_date}
                  tweetContent={
                    element.tweet_organized_content
                      ? element.tweet_organized_content[0]
                      : element.tweet_organized_content
                  }
                  tweetContentExtended={
                    element.tweet_organized_content
                      ? element.tweet_organized_content[0]
                      : element.tweet_organized_content
                  }
                  isBookmarked={
                    currentUser.status === "loggedIn"
                      ? currentUser.currentUser.tweetsBookmarked === undefined
                        ? false
                        : currentUser.currentUser.tweetsBookmarked.includes(
                            element.tweet_organized_id
                          )
                        ? true
                        : false
                      : false
                  }
                />
              );
            } else {
              return;
            }
          })}
      </MainGridContainer>
    </>
  );
};

const MainGridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
`;

export default TweetsGrid;
