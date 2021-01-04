import React from "react";
import styled from "styled-components";
import Tweet from "./Tweet";

const TweetsGrid = ({ tweets }) => {
  return (
    <>
      <MainGridContainer>
        {tweets &&
          tweets.map((element) => {
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
                tweetContentExtended={element.tweet_organized_content}
              />
            );
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
