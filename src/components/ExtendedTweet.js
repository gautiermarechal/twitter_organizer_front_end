import React, { useState, useEffect } from "react";
import styles from "./ExtendedTweet.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import test_image from "../assets/images/test_image.png";

function ExtendedTweet(props) {
  const [tweetName, setTweetName] = useState();
  const [tweetScreenName, setScreenName] = useState();
  const [tweetDate, setTweetDate] = useState();
  const [tweetContent, setTweetContent] = useState([]);
  const [tweetCategory, setTweetCategory] = useState();

  useEffect(() => {
    setTweetName(props.tweetContent.name);
    setScreenName(props.tweetContent.screenName);
    setTweetDate(props.tweetContent.date);
    setTweetContent(props.tweetContent.content);
    setTweetCategory(
      props.tweetContent.category.charAt(0).toUpperCase() +
        props.tweetContent.category.slice(1)
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
                  <img className={styles.userImage} src={test_image} />
                  <p>{tweetName}</p>
                  <p>@{tweetScreenName}</p>
                </Card.Title>
                {tweetCategory} <p>{tweetDate}</p>
              </Col>
            </Row>
            <Card.Text className={styles.tweetText}>
              {tweetContent.map((text) => {
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
