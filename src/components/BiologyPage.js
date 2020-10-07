import React, { useState, useEffect } from "react";
import styles from "./BiologyPage.module.css";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tweet from "./Tweet";
import api from "../api/index";

function BiologyPage() {
  const [biologyTweets, setBiologyTweets] = useState([]);

  useEffect(() => {
    async function get() {
      await api.getTweetByCategory("psychology").then((res) => {
        let formattedContentData = res.data;
        formattedContentData = formattedContentData.map((element) => {
          if (element.tweet_organized_content.charAt(0) === "{") {
            element.tweet_organized_content = element.tweet_organized_content.replace(
              "{",
              ""
            );
            element.tweet_organized_content = element.tweet_organized_content.replace(
              "}",
              ""
            );
            console.log(element.tweet_organized_content);
            element.tweet_organized_content = element.tweet_organized_content.replace(
              /,/g,
              "\n"
            );
            element.tweet_organized_content = element.tweet_organized_content.replace(
              /"/g,
              "\n"
            );
            console.log(element.tweet_organized_content);
          }
        });
        setBiologyTweets(res.data);
        console.log(res);
      });
    }
    get();
  }, []);

  return (
    <>
      <Row className={styles.biologyTitle} float="center">
        <Col>
          <h3>Biology</h3>
        </Col>
      </Row>
      <Container>
        <Row className={styles.row1} float="center">
          <Col className={styles.searchBarContainer}>
            <SearchBar />
          </Col>
        </Row>
        <Row className={styles.row1} float="center">
          {biologyTweets.map((element) => {
            const tweetIDFormatted = "biology_" + element.tweet_organized_id;

            return (
              <Col lg={true} lg={4} style={{ marginTop: "20px" }}>
                <Tweet
                  key={tweetIDFormatted}
                  userName={element.user_name}
                  userUserName={element.user_screen_name}
                  tweetCategory={element.tweet_organized_category}
                  tweetDate={element.tweet_organized_date}
                  tweetContent={element.tweet_organized_content}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default BiologyPage;
