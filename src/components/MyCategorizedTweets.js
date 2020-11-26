import React, { useEffect, useState } from "react";
import styles from "./AccountHome.module.css";
import styled from "styled-components";
import api from "../api/index";
import Tweet from "./Tweet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MyCategorizedTweets = ({ currentUser }) => {
  const [tweets, setTweets] = useState([]);
  const [tweetsToDisplay, setTweetsToDisplay] = useState([]);

  useEffect(() => {
    console.log(currentUser);
    let tweets = [];
    let tweetsToDisplay = [];
    const get = async () => {
      tweets = await api.getAllTweets();
      setTweets(tweets.data);
    };
    get();
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <SearchBar />
          <Row>
            {tweetsToDisplay &&
              tweetsToDisplay.map((tweet) => {
                return (
                  <Col lg={true} lg={4} style={{ marginTop: "20px" }}>
                    <Tweet
                      key={tweet.id}
                      userName={tweet.user_name}
                      userUserName={tweet.user_screen_name}
                      userImageUrl={tweet.user_image_url}
                      tweetCategory={tweet.tweet_organized_category}
                      tweetDate={tweet.tweet_organized_date}
                      tweetContent={
                        tweet.tweet_organized_content
                          ? tweet.tweet_organized_content[0]
                          : tweet.tweet_organized_content
                      }
                      tweetContentExtended={tweet.tweet_organized_content}
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default MyCategorizedTweets;
