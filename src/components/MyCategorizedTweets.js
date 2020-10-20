import React, { useEffect, useState } from "react";
import styles from "./AccountHome.module.css";
import styled from "styled-components";
import api from "../api/index";
import Tweet from "./Tweet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 30px;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: auto auto auto;
//   max-width: 960px;
// `;

const MyCategorizedTweets = () => {
  const [tweets, setTweets] = useState();

  useEffect(async () => {
    await api.getAllTweets().then((res, req) => {
      setTweets(res.data);
    });
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            {tweets &&
              tweets.map((tweet) => {
                return (
                  <Col lg={true} lg={4} style={{ marginTop: "20px" }}>
                    <Tweet
                      key={tweet.id}
                      userName={tweet.user_name}
                      userUserName={tweet.user_screen_name}
                      tweetCategory={tweet.tweet_organized_category}
                      tweetDate={tweet.tweet_organized_date}
                      tweetContent={tweet.tweet_organized_content}
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
