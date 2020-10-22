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
  const newLine = <br />;

  useEffect(() => {
    async function get() {
      await api.getTweetByCategory("psychology").then((res) => {
        console.log(res.data);
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
          {biologyTweets &&
            biologyTweets.map((element) => {
              const tweetIDFormatted = "biology_" + element.tweet_organized_id;

              console.log(element.tweet_organized_content);

              return (
                <Col lg={true} lg={4} style={{ marginTop: "20px" }}>
                  <Tweet
                    key={tweetIDFormatted}
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
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default BiologyPage;
