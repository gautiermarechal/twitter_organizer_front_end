import React, { useState, useEffect } from "react";
import styles from "./ExtendedTweet.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import test_image from "../assets/images/test_image.png";
import { useTweetContext } from "../libs/tweetContext";

function ExtendedTweet() {
  const { tweetContent } = useTweetContext();

  const [tweetName, setTweetName] = useState();
  const [tweetScreenName, setScreenName] = useState();
  const [tweetImageUrl, setTweetImageUrl] = useState();
  const [tweetDate, setTweetDate] = useState();
  const [tweetStatus, setTweetStatus] = useState([]);
  const [tweetCategory, setTweetCategory] = useState();

  useEffect(() => {
    setTweetName(tweetContent.name);
    setScreenName(tweetContent.screenName);
    setTweetImageUrl(tweetContent.userImageUrl);
    setTweetDate(tweetContent.date);
    setTweetStatus(tweetContent.content);
    setTweetCategory(
      tweetContent.category.charAt(0).toUpperCase() +
        tweetContent.category.slice(1)
    );
  }, []);

  return (
    <Container className={styles.mainContainer}>
      <article className={styles.articleContainer}>
        <Card className={styles.tweetContainer}>
          <Card.Body>
            <Row className={styles.tweetHeader}>
              <Col>
                <Card.Title>
                  <img className={styles.userImage} src={tweetImageUrl} />
                  <p>{tweetName}</p>
                  <p>@{tweetScreenName}</p>
                </Card.Title>
                {tweetCategory} <p>{tweetDate}</p>
              </Col>
            </Row>
            <Card.Text className={styles.tweetText}>
              {tweetStatus.map((text) => {
                return <p>{text}</p>;
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </article>
    </Container>
  );
}

export default ExtendedTweet;
